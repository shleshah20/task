import React,{ useState, useEffect } from 'react';

export default function Display({car, model})
{
	if(car !== "" && model !== "")
	return(
		<div >
			<div>{car}</div>
			<div>{model}</div>
		</div>
		);
	else
		return (
		<div className="txtWarning">Please select appropriate value(s)</div>
	)
}