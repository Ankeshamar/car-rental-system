import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserConsumer } from "../../context/UserContext";
import "./CarCard.css"; // <-- import CSS

const CarCard = (props) => {
  const { user } = props;
  const { car } = props;

  return (
    <div className="car-card">
      <div className="car-card-image">
        <img src={car.imageUrl} alt={car.model} />
      </div>

      <div className="car-card-content">
        <h3 className="car-title">
          {car.brand} {car.model}
        </h3>

        <table className="car-details-table">
          <tbody>
            <tr>
              <th>Brand</th>
              <td>{car.brand}</td>
              <th>Price</th>
              <td>₹{car.pricePerDay}/day</td>
            </tr>
            <tr>
              <th>Seats</th>
              <td>{car.seats}</td>
              <th>Trunk</th>
              <td>{car.trunkCapacity} L</td>
            </tr>
            <tr>
              <th>Consumption</th>
              <td>{car.litersPerHundredKilometers} L/km</td>
              <th>Year</th>
              <td>{car.year}</td>
            </tr>
          </tbody>
        </table>

        <div className="car-actions">
          <Link to={`/cars/details/${car.id}`} className="btn details-btn">
            Details
          </Link>

          {user.role === "USER" &&
            props.location.pathname === "/cars/available" && (
              <Link
                to={`/cars/reserve/${car.id}`}
                className="btn reserve-btn"
              >
                Reserve
              </Link>
            )}

          {user.role === "ADMIN" && (
            <Fragment>
              <Link to={`/cars/edit/${car.id}`} className="btn edit-btn">
                Edit
              </Link>
              <Link to={`/cars/delete/${car.id}`} className="btn delete-btn">
                Delete
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const CarCardWithContext = (props) => (
  <UserConsumer>
    {({ user }) => <CarCard {...props} user={user} />}
  </UserConsumer>
);

export default withRouter(CarCardWithContext);
