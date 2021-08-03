import React from "react";
import './discovery.css';
import {useState} from 'react';
import HeroImage from "../../components/heroImage/heroImage";
import * as ReactBootStrap from 'react-bootstrap'

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Discovery() {

	const discTable = [
		{
			name: "",
			lightYrs: "",
			planetMass: "",
			stellarMag: "",
			discoveryDt: "",
		},
	]

	const renderDiscTable = (discTable, index)=>{
		return (
			<tr key={index}>
				<td>{discTable.name}</td>
				<td>{discTable.lightYrs}</td>
				<td>{discTable.planetMass}</td>
				<td>{discTable.stellarMag}</td>
				<td>{discTable.discoveryDt}</td>
			</tr>
		)
	}

	const [isChecked, setIsChecked] = useState(
		new Array (filters.length).fill(false)
	);

	const handleOnChange = () =>{
		setIsChecked(!isChecked)
	};

	return (
		<>
			<HeroImage/>
			<div id="discovery-table">
			<ReactBootStrap.Table striped bordered hover size="sm">
			<thead>
			 <tr>
				<th>Name</th>
				<th>Light Years From Earth</th>
				<th>Planet Mass</th>
				<th>Stellar Magnitude</th>
				<th>Dicovery Date</th>
			 </tr>
		  </thead>
		  <tbody>
			{discTable.map(renderDiscTable)}
		  </tbody>
		  </ReactBootStrap.Table>
		  <br/>
			</div>
			<div id="searchBttn">
			</div>
			<br/>
			<div id="filters">
				<h2>Planet System</h2>
					<div className="planet-system">
						<input type="checkbox" id="planet-system" name="planet-system" value="planets-discovered-by-kepler" checked={isChecked} onChange{handleOnChange}/>
						<p>Planets Discovered by Kepler</p>
						<input type="checkbox" id="planet-system" name="planet-system" value="planets-with-host-stars-visible-to-naked-eye" checked={isChecked} onChange{handleOnChange}/>
						<p>Planets With Host Stars Visible To The Naked Eye</p>
						<input type="checkbox" id="planet-system" name="planet-system" value="planets-within-multiple-planet-systems" checked={isChecked} onChange{handleOnChange}/>
						<p>Planets Within Multiple Planet Systems</p>
					</div>
					<br/>
				<h2>Planet Type</h2>
					<div className="planet-type">
						<input type="checkbox" id="planet-type" name="planet-type" value="gas-giant" checked={isChecked} onChange{handleOnChange}/>
						<p>Gas Giant</p>
						<input type="checkbox" id="planet-type" name="planet-type" value="neptune-like" checked={isChecked} onChange{handleOnChange}/>
						<p>Neptune-Like</p>
						<input type="checkbox" id="planet-type" name="planet-type" value="super-earth" checked={isChecked} onChange{handleOnChange}/>
						<p>Super Earth</p>
						<input type="checkbox" id="planet-type" name="planet-type" value="terrestrial" checked={isChecked} onChange{handleOnChange}/>
						<p>Terrestrial</p>
						<input type="checkbox" id="planet-type" name="planet-type" value="unknown" checked={isChecked} onChange{handleOnChange}/>
						<p>Unknown</p>
					</div>
					<br/>
				<h2>Discovery Method</h2>
					<div className="discovery-method">
						<input type="checkbox" id="discovery-method" name="discovery-method" value="astronomy" checked={isChecked} onChange{handleOnChange}/>
						<p>Astronomy</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="disk-kinematics" checked={isChecked} onChange{handleOnChange}/>
						<p>Disk Kinematics</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="eclipse-timing-variations" checked={isChecked} onChange{handleOnChange}/>
						<p>Eclipse Timing Variations</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="imaging" checked={isChecked} onChange{handleOnChange}/>
						<p>Imaging</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="microlensing" checked={isChecked} onChange{handleOnChange}/>
						<p>Microlensing</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="orbital-brightness-modulation" checked={isChecked} onChange{handleOnChange}/>
						<p>Orbital Brightness Modulation</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="pulsar-timing" checked={isChecked} onChange{handleOnChange}/>
						<p>Pulsar Timing</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="pulsar-timing-variations" checked={isChecked} onChange{handleOnChange}/>
						<p>Pulsar Timing Variations</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="radial-velocity" checked={isChecked} onChange{handleOnChange}/>
						<p>Radial Velocity</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="transit" checked={isChecked} onChange{handleOnChange}/>
						<p>Transit</p>
						<input type="checkbox" id="discovery-method" name="discovery-method" value="transit-timing-variations" checked={isChecked} onChange{handleOnChange}/>
						<p>Transit Timing Variations</p>
					</div>
					<div className="resutlt">Above checkbox is {isChecked ? "checked" : "un-checked"}</div>
					<br/>
			</div>

		</>

	);
};
