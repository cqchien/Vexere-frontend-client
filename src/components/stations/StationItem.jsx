import React from 'react';

const StationItem = (props) => {
  const { station } = props

  const [isShowDetail, toggleDetail] = React.useState(false);
  console.log(isShowDetail);

  return (
    <div className = "col-md-3">
      <div className = "card">
        <img className="card-img-top" src="holder.js/100x180/" alt="" />
        <div className = "card-body">
          <h5 className = "card-title"> {station.name} </h5>
          <button
          className = "btn btn-sm btn-outline-info mr-3"
          onClick={() => toggleDetail(!isShowDetail)} > 
            Chi Tiết
          </button>
          
          <button type="button" className="btn btn-sm btn-outline-success" data-toggle="modal" data-target="#modelId">
            Hiển thị Modal
          </button>
          {
             isShowDetail && <div>
             <p className="card-text">Địa Chỉ: {station.address}</p>
             <p className="card-text">Thành Phố: {station.province}</p>
           </div>
          }
        </div>
      </div>
    </div>
  );
};

export default StationItem;