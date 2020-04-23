import React from 'react';

import api from "../../apis";

import TripItem from "./TripItem";
import TripDetail from "./TripDetail";

const Trip = () => {

  const [trip, setTrip] = React.useState({});
  const [trips, setTrips] = React.useState([]);

  React.useEffect(() => {
    api.get("/trips")
      .then(res => {
        setTrips(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const renderTrips = () => {
    return trips.map((trip, index) => {
      return <TripItem
        key={index}
        trip={trip}
        index={index}
        setTrip={setTrip}
      />
    })
  }

  return (
    <div className="my-5 container">
      <h1>DANH SÁCH CHUYẾN ĐI</h1>

      <table class="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Nơi xuất phát</th>
            <th>Nơi đến</th>
            <th>Giá tiền</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderTrips()}
        </tbody>
      </table>

      {
        Object.keys(trip).length > 0 && <TripDetail trip={trip} />
      }
    </div>
  );
};

export default Trip;