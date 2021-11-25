import React from 'react'
import {useTable} from 'react-table'

const ReactTable = ({colums, data }) => {

    const {} = useTable(colums, data)

    return (
        <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
}

export default ReactTable
