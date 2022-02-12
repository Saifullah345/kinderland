import React from "react";
import { Button, Table } from "react-bootstrap";
const Dashboardtable = () => {
  return (
    <div className="text-center" style={{ overflowx: "auto" }}>
      <div className="card  border  text-left card_left ">
        <h5 className="mx-2 ">Top Selling Representative</h5>
        <span className="text-muted">Today</span>
        <Table className=" table1 table-borderless" responsive>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Representative </th>
              <th>Total Sales </th>
              <th>Total Customers </th>
              <th>Total Revenue </th>
            </tr>
          </thead>
          <tbody className="text-center text-muted">
            <tr>
              <td>1</td>
              <td>
                <i className="fa fa-user-circle"> Ali Greater</i>
              </td>
              <td>50</td>
              <td>150</td>
              <td>550</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <i className="fa fa-user-circle"> Ali Greater</i>
              </td>
              <td>50</td>
              <td>150</td>
              <td>550</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <i className="fa fa-user-circle"> Ali Greater</i>
              </td>
              <td>50</td>
              <td>150</td>
              <td>550</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <i className="fa fa-user-circle"> Ali Greater</i>
              </td>
              <td>50</td>
              <td>150</td>
              <td>550</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <i className="fa fa-user-circle"> Ali Greater</i>
              </td>
              <td>50</td>
              <td>150</td>
              <td>550</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <i className="fa fa-user-circle"> Ali Greater</i>
              </td>
              <td>50</td>
              <td>150</td>
              <td>550</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboardtable;
