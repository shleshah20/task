import React,{ Component } from 'react';
import Company from './company.js';
import Car from './car.js';

function Container()
{
	return(
		<div className="box">
			<Company className="company" />
		</div>
	);
}

export default Container;
