import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { DatesConsumer } from "../../../context/DatesContext";
import util from "../../../util/util";
import "./CarInformation.css"; // <-- Import the CSS file

const CarInformation = (props) => {
  const { startDate, endDate } = props.dates;
  const days = util.getDaysBetween(new Date(startDate), new Date(endDate));
  const isReservePage = props.location.pathname.startsWith("/cars/reserve");

  return (
    <div className="car-info-container">
      {/* Left section */}
      <div className="car-info-left">
        <h1 className="car-title">
          {props.data.brand} {props.data.model}
        </h1>
        <h3 className="car-year">Year: {props.data.year}</h3>

        {isReservePage ? (
          <Fragment>
            <h2 className="section-title">Rent Information</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <td>Start Date</td>
                  <td>{util.formatDate(startDate)}</td>
                </tr>
                <tr>
                  <td>End Date</td>
                  <td>{util.formatDate(endDate)}</td>
                </tr>
                <tr>
                  <td>Total Price</td>
                  <td className="highlight">${days * props.data.pricePerDay}</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              * For every day after the return date, you will be charged double
              the daily price.
            </p>
          </Fragment>
        ) : (
          <div>
            <hr className="divider" />
            <p className="car-description">{props.data.description}</p>
            <hr className="divider" />
            <div className="price-info">
              <span>Price: ${props.data.pricePerDay}/day</span>
            </div>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="car-info-right">
        <img
          src={props.data.imageUrl}
          alt={`${props.data.brand} ${props.data.model}`}
          className="car-image"
        />
        <div className="technical-card">
          <h2 className="section-title">Technical Data</h2>
          <table className="info-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>{props.data.brand}</td>
                <td>Seats</td>
                <td>{props.data.seats}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{props.data.model}</td>
                <td>Year</td>
                <td>{props.data.year}</td>
              </tr>
              <tr>
                <td>Luggage</td>
                <td>{props.data.trunkCapacity} L</td>
                <td>Consumption</td>
                <td>{props.data.litersPerHundredKilometers} L/100km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CarInformationWithContext = (props) => {
  return (
    <DatesConsumer>
      {({ dates }) => <CarInformation {...props} dates={dates} />}
    </DatesConsumer>
  );
};

export default withRouter(CarInformationWithContext);
