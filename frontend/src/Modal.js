import React from 'react';

const backdropStyle = {
	position:'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.3)',
	padding: 20
}

const modalStyle = {
    backgroundColor: '#fff',
	borderRadius: 5,
	maxWidth: 150,
	minHeight: 150,
    margin: '0 auto',
	padding: 10,
	position: "relative"
}

const footerStyle = {
	position:'absolute',
	bottom: 20
}

export default class Modal extends React.Component{


	OnOk(event){
			this.props.OnOk && this.props.OnOk(event);
	}

	OnCancel(event)
	{

	}
	render(){
		if(!this.props.show){
			return null;
		}
		return(
			<div style={backdropStyle}>
			 <div style={modalStyle}>
				<div style={footerStyle}>
				<label>Table Id</label>
				<input type="text" placeholder="Table Id"></input>
				<br/>
				<label>Device Type</label>
				<select name="devtype">
    			<option value="Mac">Mac</option>
			    <option value="Phone">Phone</option>
			    <option value="Watch">Watch</option>
			   	</select>
			   	<br/>
				<button onClick={this.OnOk}>Ok</button>
				<button onClick={this.OnCancel}>Cancel</button>
				</div>
				</div>
			</div>
			)
	}
}