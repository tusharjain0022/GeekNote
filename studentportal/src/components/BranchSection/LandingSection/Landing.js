import React from 'react';
import "./Landing.css";
import back from './svg_img/back.svg';


function Landing(props) {
	return (
		<div className="landing-section">
			<div className="land_div" style={{ backgroundImage: `url(${back})` ,backgroundSize: 'cover' }}>
				<div className="text_land" >
					<h1 style={{ color: 'white', fontFamily: 'Roboto Slab', fontWeight: 'bolder' }} >{props.name} Branch Section</h1>
					<div className="button_block" >
						<button style={{backgroundColor: '#c7c3c3'}} className="left_button"><span style={{fontFamily: 'Roboto Slab',paddingLeft: '10px', paddingRight: '10px', fontWeight: 'bold'}}>2nd sem</span></button>
						<button style={{backgroundColor: '#c7c3c3'}} className="right_button"><span style={{fontFamily: 'Roboto Slab',paddingLeft: '10px', paddingRight: '10px', fontWeight: 'bold'}}>1st sem</span></button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Landing;