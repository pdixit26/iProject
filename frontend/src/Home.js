import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import ModalComponent from './ModalComponent';
import {Button} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let textStyle = {
	color:'#3A003A',
	face:'verdana'
}

class Home extends Component {
 constructor()
  {
    super();
    this.state = {
    	tableid:'',
    	devicetype:'',
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
    	message:'',
      data: []
    }
  }

  componentDidMount(){
  	console.log("component Mounted");
  }

  addTable(event){
    event.preventDefault();
    let that = this;
    
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
        if (data.code === '23505'){
        	that.setState({message:'Table with this name exits. Please select another name.'});
        }
        else if(data.code === '22P02')
        	that.setState({message:'Either one or more cells are empty OR has an invalid value.'});
        else if (data.status === 'OK') {
        	that.setState({message:'Data Inserted Successfully'});
        }
        
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


saveTable(){
  console.log(this.state.c0r0);
  console.log(this.state.c1r0);
  console.log(this.state.c2r0);
    	

}


onAfterSaveCell(row, cellName, cellValue)
{
	 //alert(`Save cell ${cellName} with value ${cellValue}`);

  let rowStr = '';
  for (const prop in row) {
    rowStr += prop + '+' + row[prop] + '+';
  }
  this.updateTableData(rowStr);
}


updateTableData(rowStr){

	let words = rowStr.split('+')
	let i = 1;
		if(words[i]==='1')
		{
			this.setState({
   		c0r0:words[i+2],
   		c1r0:words[i+4],
   		c2r0:words[i+6] });
		}
		else if(words[i]==='2')
		{
			this.setState({
   		c0r1:words[i+2],
   		c1r1:words[i+4],
   		c2r1:words[i+6] });
		}
	    else if(words[i]==='3')
		{this.setState({
   		c0r2:words[i+2],
   		c1r2:words[i+4],
   		c2r2:words[i+6] });
      }
	
}
  render() {
  	var data = [
  {id: 1, nunit: this.state.c0r0, price: this.state.c1r0, mfg: this.state.c2r0 },
  {id: 2, nunit: this.state.c0r1, price: this.state.c1r1, mfg: this.state.c2r1},
  {id: 3, nunit: this.state.c0r2, price: this.state.c1r2, mfg: this.state.c2r2}
];
 
 const cellEditProp = {
      mode: 'click', // 'dbclick' for trigger by double-click
      afterSaveCell: this.onAfterSaveCell.bind(this)
    }
  	    
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
        <BootstrapTable striped data={data}
                        cellEdit={cellEditProp}
        >
          <TableHeaderColumn isKey dataField='id'
          >
            #
          </TableHeaderColumn>
          <TableHeaderColumn dataField='nunit'
          >
           # of Unit
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'
          >
            Price 
          </TableHeaderColumn>
            <TableHeaderColumn dataField='mfg'
          >
            Manufacture Year  
          </TableHeaderColumn>
        </BootstrapTable>
       <br/>
       <br/>
       <Button color="success" onClick={this.addTable.bind(this)}> Save Table </Button>

       </form>
       <br/>
        <h4 style={textStyle}>{this.state.message}</h4>
 
       </div>

    );
  }
}
 
export default Home;