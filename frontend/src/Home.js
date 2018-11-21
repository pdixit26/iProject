import React, { Component } from "react";
import Modal from './Modal';

 
class Home extends Component {
 constructor()
  {
    super();
    this.state = {
    	show:false,
      data: []
    }
  }

  componentDidMount(){
  	console.log("component Mounted");
  }

  addTable(event){
    event.preventDefault();
    let data = {
    	tableid: this.refs.tableid.value,
    	devicetype: this.refs.devicetype.value,
    	c0r0: this.refs.c0r0.value,
    	c0r1: this.refs.c0r1.value,
    	c0r2: this.refs.c0r2.value,
    	c1r0: this.refs.c1r0.value,
    	c1r1: this.refs.c1r1.value,
    	c1r2: this.refs.c1r2.value,
    	c2r0: this.refs.c2r0.value,
    	c2r1: this.refs.c2r1.value,
    	c2r2: this.refs.c2r2.value
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
        
        console.log(data.code);

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

  render() {
    
    return (
      <div>
            <button onClick={this.showModal}>New Table</button>
        <Modal OnOk = {this.showModal} OnCancel={this.showModal}show={this.state.show}>
        Helllo Modal 
        </Modal>
        <form ref="dbForm">
        <input type="text" ref="tableid" placeholder="text" />
        <input type="text" ref="devicetype" placeholder="text" />
        <br/>
       <input type="text" ref="c0r0" placeholder="text" />
       <input type="text" ref="c1r0" placeholder="number" />
       <input type="text" ref="c2r0" placeholder="number" />
       <br/>
       <input type="text" ref="c0r1" placeholder="text" />
       <input type="text" ref="c1r1" placeholder="number" />
       <input type="text" ref="c2r1" placeholder="number" />
       <br/>
       <input type="text" ref="c0r2" placeholder="text" />
       <input type="text" ref="c1r2" placeholder="number" />
       <input type="text" ref="c2r2" placeholder="number" />
       <br/>
       <button onClick={this.addTable.bind(this)}> Save Table </button>
       </form>
     

 
       </div>

    );
  }
}
 
export default Home;