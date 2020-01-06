import React from "react";
import Trashcan from "../trashcan.svg";
import "./table.css";

const Table = props => {
  return (
    <table id="itemList">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Cost</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>
                {item.name}, {item.size}
              </td>
              <td>{item.price}</td>
              <td>
                <div id="quantityBox">
                  <input
                    type="number"
                    className="quantityNumber"
                    onChange={(event) => props.quantityHandler(item.id, event.target.value)}
                    value={item.amount}
                  />
                  <div
                    className="quantityChanger"
                    onClick={() => props.quantityHandler(item.id, "+")}
                  >
                    +
                  </div>
                  <div
                    className="quantityChanger"
                    onClick={() => props.quantityHandler(item.id, "–")}
                  >
                    –
                  </div>
                </div>
              </td>
              <td>£{(item.amount * item.price).toFixed(2)}</td>
              <td>
                <div>
                  <img src={Trashcan} alt="delete symbol" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
