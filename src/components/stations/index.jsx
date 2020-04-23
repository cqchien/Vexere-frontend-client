import React from 'react';
import StationItem from './StationItem';
import Modal from './Modal';
import api from "../../apis";

const Station = () => {

  const [station, setStation] = React.useState({})
  const [stations, setStations] = React.useState([])

  React.useEffect(() => {
    api.get("/stations")
      .then(res => {
        setStations(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const renderStations = () => {
    return stations.map((station, index) => {
      return <StationItem  
      key = {index}
      station  = {station}
      setStation = {setStation}
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

        <Modal station = {station}/>
      </div>
    </div>
  );
};

export default Station;