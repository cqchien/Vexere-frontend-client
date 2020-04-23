import React from 'react';

const Seat = (props) => {
  const { seat } = props;

  const [isSelected, toggleSeat] = React.useState(false);

  const selectSeat = () => {
    const _isSelected = !isSelected;

    if (_isSelected) {
      const _selectedSeats = [...props.selectedSeats, seat];
      props.setSelectedSeats(_selectedSeats);
    } else {
      const _selectedSeats = props.selectedSeats.filter(f => f._id !== seat._id)
      props.setSelectedSeats(_selectedSeats);
    }

    toggleSeat(_isSelected);
  }

  const renderSeatColor = () => {
    if (seat.isBooked) return "outline-danger"

    if (isSelected) return "success"

    return "outline-success"
  }

  return (
    <button
      className={`btn btn-${renderSeatColor()} m-2`}
      onClick={() => selectSeat()}
      disabled={seat.isBooked}
    >{seat.code}</button>
  );
};

export default Seat;