import React, { Component } from 'react';

class RenderApp extends Component {
	constructor(props){
		super(props)
		this.state = {
			count: 0
		}
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
		this.increment = this.increment.bind(this);
	}
	decrement(){
		this.state.count <= 0 
		? 
			this.setState(state => ({
				count: 0
			}))
		:
			this.setState(state => ({
				count: state.count - 1
			}))
	}
	increment(){
		this.state.count >= 99 
		? 
			this.setState(state => ({
				count: 99
			}))
		:
			this.setState(state => ({
					count: state.count + 1 
			}))
	}
	reset(){
		this.setState({
			count: 0
		})
	}
	componentDidMount(){
		const buttons = document.querySelectorAll('.__buttons-click');
		buttons.forEach((btn) => btn.addEventListener('click', function(event){
			setTimeout(() => {
				this.classList.add('__buttons-clicked');
			}, 0)
			setTimeout(() => {
				this.classList.remove('__buttons-clicked');
			}, 200)
		}));
	}

	render() {
		const color = '#a9453e';
		const styleFrame = {
			width: '400px',
			height: '500px',
			border: '2px solid #5c5d5c',
			borderRadius: '50%',
			boxShadow: '0px 10px 10px #5c5d5c',
			background: color,
			overflow: 'hidden'
		}
		return (
			<div className="frame" style={styleFrame}>
				<div className="__frame-number">
					<h1 className="__frame-number-display">{this.state.count}</h1>
				</div>
				<div className="buttons">
					<button className="__buttons-click" onClick={this.decrement}><i className="fa fa-minus" style={{color: color}}></i></button>
					<button className="__buttons-click" onClick={this.reset}><i className="fas fa-sync" style={{color: color}}></i></button>
					<button className="__buttons-click" onClick={this.increment}><i className="fa fa-plus" style={{color: color}}></i></button>
				</div>
			</div>
		);
	}
}
export default RenderApp;
