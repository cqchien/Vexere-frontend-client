import React from 'react';
import StationItem from './StationItem';
import stations from '../../mockup/stations';
import Modal from './Modal';

const Station = () => {

  const renderStations = () => {
    return stations.map((station, index) => {
      return <StationItem  
      key = {index}
      station  = {station}
      />
    })
  }

  return (
    <div>
      <h1 style={{ marginTop: "50px" }}>DANH SÁCH BẾN XE</h1>

      <div className = "container">
        <div className = "row">
          {renderStations()}
        </div>

        <Modal />
      </div>
    </div>
  );
};

export default Station;