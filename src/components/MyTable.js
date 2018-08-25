import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class MyTable extends Component {
  render() {
    const {users, deleteUser, saveStorage} = this.props
    return (
      <div>
        <h2 className="center">Users</h2>
        <ReactTable
          data={users}
          filterable
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
          getTrProps={(state, rowInfo) => ({
            onClick: e => {deleteUser(rowInfo.original.id), saveStorage(state.page, state.pageRows.length)}
          })}
          defaultPageSize={10}
          className="-striped -highlight clickable"
        />
      </div>
    )
  }
}

export default MyTable