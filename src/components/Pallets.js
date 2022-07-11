import { Component } from "react";
import axioaApi from '../api/axios/axios-baseurl';

class Pallets extends Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(), pallets: []}; 
		this.handleClick = this.handleClick.bind(this); 
		// const palletItems = thickness; 
	
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
		axioaApi.get('pallets/')
		.then(res => {
			const pallets = res.data;
			this.setState ({ pallets })
		})
		
	}
  	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({ date: new Date() });  
	}
	handleClick(){

		
	}
	render() {
		return (
			<div>
			<h1>Привет!</h1>
			<h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
			<button onClick={this.handleClick}>Show list:</button>
			<ul>
				{
					this.state.pallets.map(pallet => 
						<li key={pallet.id}>
							{pallet.id}
						</li>)
				}
			</ul>
		      </div>
		);
	      }		
}

export default Pallets;