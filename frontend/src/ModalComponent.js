import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: '',type :'' };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
    this.props.onChangeValueName(event);
    console.log("####"+event.target.value);
  }
  handleChangeType(event) {
    this.setState({type: event.target.value});
    this.props.onChangeValueType(event);
  }


  handleSubmit(event) {
 //    {this.props.handleChangeValue};
    event.preventDefault();
  
    this.props.onSubmitBtn(event);
    this.setState({
        modal: !this.state.modal
      });
     }


  render() {
    return (

        <div>
         <Button color="success" onClick={this.toggle}>Create New Table</Button>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Create New Table</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>Table Name:</label>
            <input type="text"  value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
            <label>Device Type:</label>
               <select onChange={this.handleChangeType}>
               <option value="NotSpecified"></option>
                <option value="Mac">Mac</option>
                <option value="Phone">Phone</option>
                <option value="Watch">Watch</option>
               </select>
  
               </div>
              </div>
            
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
