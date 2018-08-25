import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class MyTable extends Component {
  render() {
    const {users} = this.props
    const {deleteUser} = this.props
    return (
      <div>
        <h2 className="center">Users</h2>
        <ReactTable
          data={users}
          columns={[
            {
              Header: "Id",
              accessor: "id"
            },
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Phone",
              accessor: "phone"
            },
            {
              Header: "Email",
              accessor: "email"
            },
            {
              Header: "Username",
              accessor: "username"
            },
            {
              Header: "Website",
              accessor: "website"
            }
          ]}
          getTrProps={(state, rowInfo, column, instance) => ({
            onClick: e => {deleteUser(rowInfo.original.id)}
          })}
          defaultPageSize={10}
          // className="-striped -highlight clickable"
        />
      </div>
    )
  }
}

export default MyTable