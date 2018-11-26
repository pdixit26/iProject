import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import 'react-bootstrap-table/css/react-bootstrap-table.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 
 
class Table1 extends Component {
  render() {
    const cellEditProp = {
      mode: 'click', // 'dbclick' for trigger by double-click
      afterSaveCell: this.onAfterSaveCell
    }
    return (
      <div>
        <BootstrapTable striped data={this.props.data}
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
      </div>
    )
  }
}
 
export default Table1
