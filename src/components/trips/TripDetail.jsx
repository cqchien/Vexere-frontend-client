import React from 'react';

import api from "../../apis";

import Seat from "./Seat";

const TripDetail = (props) => {
  const { trip } = props;

  const [selectedSeats, setSelectedSeats] = React.useState([]);

  const renderSeats = () => {
    return trip.seats.map((seat, index) => {
      return <Seat
        key={index}
        seat={seat}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />
    })
  }

  const bookTicket = () => {
    const tripId = trip._id;
    const seatCodes = selectedSeats.map(seat => seat.code);
    api.post("/tickets", {
      tripId,
      seatCodes
    })
      .then(res => {
        console.log(res);
        // sau khi book ve thanh cong
        // hien thi modal or popup or alert thong bao nguoi dung
        // book ve thanh cong + so tien + email
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h4>Nơi xuất phát: {trip.fromStationId.name}</h4>
      <h4>Nơi đến: {trip.toStationId.name}</h4>

      <h6>DANH SÁCH GHẾ</h6>

      {renderSeats()}

      <button
        className="btn btn-info"
        onClick={() => bookTicket()}
      >Book vé</button>
    </div>
  );
};

export default TripDetail;