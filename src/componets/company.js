import React,{ Component } from 'react'
import Car from './car.js';

export default class Company extends Component
{
	constructor(props) {
		super(props)
		this.state = {
			selectedValue: ''
		}
		this.onchange = this.onchange.bind(this)
	}
	onchange(e){
		this.setState({selectedValue: e.target.value})
	}
	render(){

		return (
			<div className="company">
				<select onChange={this.onchange} value={this.state.selectedValue}>
					<option value="none">select any option</option>
					<option value="maruti suzuki">maruti suzuki</option>
					<option value="kia">kia</option>
					<option value="tata">tata</option>
				</select>
				<Car value={this.state.selectedValue} />
			</div>
			)
	}
}
