import React from 'react';

const TripItem = (props) => {
  const { index, trip } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{trip.fromStation.name}</td>
      <td>{trip.toStation.name}</td>
      <td>{trip.price}</td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => props.setTrip(trip)}
        >Đặt vé</button>
      </td>
    </tr>
  );
};

export default TripItem;