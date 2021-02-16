import React,{ useState, useEffect } from 'react';
import Display from './display.js'
function Car({value})
{
	
	const [models, setModels] = useState([]);
	const [selectedValue, setSelectedValue] = useState('');

	useEffect(() => {
		if(value === "maruti suzuki") {
			setModels(["Baleno", "Swift", "WagonR"]);
		}
		else if(value === "kia") {
			setModels(["Seltos", "Sonet", "Sportage"])
		}
		else if(value === "tata") {
			setModels(["Nexon", "Altrox", "Harrier"])
		}
	},[value])
	return(
			<div>
				<select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
					<option>select any option</option>
					{
						models.map((e,i) =>
							<option key={i}>{e}</option>
							)
					}
				</select>
				<Display car={value} model={selectedValue} />
			</div>
			)
}

export default Car;