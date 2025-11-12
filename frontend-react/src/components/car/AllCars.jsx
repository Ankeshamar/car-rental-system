import React, { Component } from "react";
import toastr from "toastr";

import SearchInput from "../common/tools/SearchInput";
import Car from "./CarCard";
import { carService } from "../../services";
import Paginator from "../common/tools/Paginator";

import withPaging from "../hoc/withPaging";
import withSearch from "../hoc/withSearch";

import "./AllCars.css"; // <-- import the CSS file

class AllCars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      loading: true,
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.paging.page !== prevProps.paging.page ||
      this.props.searchString !== prevProps.searchString
    ) {
      this.fetchData();
    }
  }

  onSearchSubmit(e) {
    e.preventDefault();
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    carService
      .getAllCars(
        "?page=" + this.props.paging.page,
        "&query=" + this.props.searchString
      )
      .then((res) => {
        if (res.success === false) {
          toastr.error(res.message);
        } else {
          this.props.updatePages(res.totalPages);
          this.setState({
            cars: res.content,
            loading: false,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
      });
  }

  render() {
    const { cars, loading } = this.state;

    return (
      <div className="allcars-container">
        {/* Header */}
        <section className="header-section">
          <h1 className="header-title">Explore Our Fleet</h1>
          <p className="header-subtitle">
            Discover the perfect vehicle for your next adventure
          </p>
        </section>

        {/* Search */}
        <section className="search-section">
          <div className="search-box">
            <SearchInput
              onChange={this.props.onSearchChange}
              onSearchSubmit={this.onSearchSubmit}
            />
          </div>
        </section>

        {/* Results */}
        <section className="results-section">
          {loading ? (
            <div className="loading">
              <div className="loader"></div>
              <p>Finding your perfect car...</p>
            </div>
          ) : cars.length ? (
            <>
              <div className="results-header">
                <h2>
                  Available Cars{" "}
                  {this.props.searchString && (
                    <span className="highlight">
                      for “{this.props.searchString}”
                    </span>
                  )}
                </h2>
                <div className="cars-count">
                  {cars.length} {cars.length === 1 ? "car" : "cars"} found
                </div>
              </div>

              <div className="cars-grid">
                {cars.map((car) => (
                  <Car key={car.id} car={car} />
                ))}
              </div>

              <div className="pagination-box">
                <Paginator
                  nextPage={this.props.nextPage}
                  prevPage={this.props.prevPage}
                  totalPages={this.props.paging.totalPages}
                  page={this.props.paging.page + 1}
                  pageChange={this.props.pageChange}
                />
              </div>
            </>
          ) : (
            <div className="no-cars">
              <div className="emoji">🚗</div>
              <h3>No cars found</h3>
              <p>
                Try adjusting your search criteria or browse all available
                vehicles.
              </p>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default withPaging(withSearch(AllCars));
