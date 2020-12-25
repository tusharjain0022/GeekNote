import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
const CarouselCard = (props)=>{
  let data = props.data
    return(
        <>
        <div className="card" style={{width: "100%"}}>
        <div className="container-fluid">
            <img className="card-img-top" src="https://source.unsplash.com/user/erondu/1600x1000" alt="Card image cap"/>
            <div className="bottom-text"><h2>hello everyone</h2></div>
        </div>
            
            <div className="card-body">
              <div className="card-meta">September 01, 2020</div>
              <h5 className="title" style={{fontWeight: "700"}}>{data.content}</h5>
              <Link to="#" style={{fontWeight: "700", fontSize:"smaller"}}>Read More</Link>
            </div>
          </div>
          {/* <p className="legend">Legend 2</p> */}
        </>
    );
};

export default CarouselCard;