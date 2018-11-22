import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ModalComponent from './ModalComponent';
import {Button, Table} from 'reactstrap';

 
class Home extends Component {
 constructor()
  {
    super();
    this.state = {
    	tableid:'pooja',
    	devicetype:'dixit',
    	c0r0:'',
    	c0r1:'',
    	c0r2:'',
    	c1r0:'',
    	c1r1:'',
    	c1r2:'',
    	c2r0:'',
    	c2r1:'',
    	c2r2:'',
    	show:false,
      data: []
    }
  }

  handleChangeValue = e => {
  	this.setState({tableid:e.target.value, devicetype:e.target.type});
  	console.log(e.target.value);
  }
  
  componentDidMount(){
  	console.log("component Mounted");
  }

  addTable(event){
    event.preventDefault();
    let data = {
    	tableid: this.state.tableid,
    	devicetype: this.state.devicetype,
    	c0r0: this.state.c0r0,
    	c0r1: this.state.c0r1,
    	c0r2: this.state.c0r2,
    	c1r0: this.state.c1r0,
    	c1r1: this.state.c1r1,
    	c1r2: this.state.c1r2,
    	c2r0: this.state.c2r0,
    	c2r1: this.state.c2r1,
    	c2r2: this.state.c2r2
    }

     var request = new Request('http://localhost:3000/api/new-table',{
      method: 'POST',
      headers: new Headers({ 'Content-Type':'application/json'}),
      body: JSON.stringify(data)
    });
	
    fetch(request)
    .then(function(response){
      response.json()
      .then(function(data){
        if (data.code === '23505')
        	console.log("table with same name exists");
        else if(data.code === '22P02')
        	console.log("Either table is empty OR not filled with desired data type");
        
        console.log(data);

      })
    })
    .catch(function(err){
    	if(err.code === 23505)
    		console.log("table with same name exists");
      console.log(err.code);
    })

  }
showModal = () => {
	this.setState({
		...this.state,
		show: !this.state.show
	});

}
handleChangeTableName = event => {
  	this.setState({tableid:event.target.value});
  	
  }

handleChangeDeviceType = event => {
  	this.setState({devicetype:event.target.value});

  	
  }

  handleSubmitBtn = event =>
  {

   if(this.state.devicetype==='Phone')
   {
   	this.setState({
   		c0r0:11,
   		c1r0:12,
   		c2r0:13,
   		c0r1:14,
   		c1r1:15,
   		c2r1:16,
   		c0r2:17,
   		c1r2:18,
   		c2r2:19,

   	});

   }
   else if(this.state.devicetype==='Watch')
   	{
   	this.setState({
   		c0r0:21,
   		c1r0:22,
   		c2r0:23,
   		c0r1:24,
   		c1r1:25,
   		c2r1:26,
   		c0r2:27,
   		c1r2:28,
   		c2r2:29,
   	});

   }
   	else if(this.state.devicetype==='Mac')
   		{
   	this.setState({
   		c0r0:1,
   		c1r0:2,
   		c2r0:3,
   		c0r1:4,
   		c1r1:5,
   		c2r1:6,
   		c0r2:7,
   		c1r2:8,
   		c2r2:9,
   	});

   }
  }


saveData(){
	console.log("data saved");
}


  render() {
  	    
    return (
      <div>
           <ModalComponent onChangeValueName={this.handleChangeTableName} onChangeValueType={this.handleChangeDeviceType} onSubmitBtn={this.handleSubmitBtn}/>  
           <br/>   
        <form ref="dbForm">
        <label>Table Name: </label>
        <label> {this.state.tableid}</label>
        <br/>
        <label>Device Type: </label>
       <label> {this.state.devicetype}</label>
        <br/>
        <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Price</th>
            <th>Number of Unit</th>
            <th>Manufactor Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{this.state.c0r0}</td>
            <td>{this.state.c1r0}</td>
            <td>{this.state.c2r0}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
             <td>{this.state.c0r1}</td>
            <td>{this.state.c1r1}</td>
            <td>{this.state.c2r1}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
             <td>{this.state.c0r2}</td>
            <td>{this.state.c1r2}</td>
            <td>{this.state.c2r2}</td>
          </tr>
        </tbody>
      </Table>
       <br/>
       <br/>
       <Button color="success" onClick={this.addTable.bind(this)}> Save Table </Button>
       </form>
     

 
       </div>

    );
  }
}
 
export default Home;