import React, { Component } from "react";
import AKQAlogo from "./AKQA-Logo.svg";
import "./App.css";
import Table from "./Components/Table";
import items from "./items.json";

class App extends Component {
  state = {
    subTotal: 0,
    vat: 0,
    total: 0,
    items: [...items]
  };

  calcPrice = () => {
    let subTotal = 0;
    items.forEach(item => {
      subTotal += item.price * item.amount;
    });
    let vat = (subTotal * 20) / 100;
    let total = vat + subTotal;

    this.setState({
      subTotal: subTotal,
      vat: vat,
      total: total
    });
  };

  componentDidMount = () => {
    this.calcPrice();
  };

  handleAmount = (id, event) => {
    let operator = event;
    let newItems = [...this.state.items];
    if (operator === "+") {
      this.state.items.forEach((item, index) => {
        if (item.id === id) {
          newItems[index].amount = Number(newItems[index].amount) + 1;
          this.setState(
            {
              items: newItems
            },
            this.calcPrice()
          );
        }
      });
    } else if (operator === "–") {
      this.state.items.forEach((item, index) => {
        if (item.id === id && item.amount > 1) {
          newItems[index].amount = Number(newItems[index].amount - 1);
          this.setState(
            {
              items: newItems
            },
            this.calcPrice()
          );
        }
      });
    } else {
      this.state.items.forEach((item, index) => {
        if (item.id === id) {
          console.log("Hallo");
          newItems[index].amount = event;
          this.setState(
            {
              items: newItems
            },
            this.calcPrice()
          );
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <main>
          <img id="logo" width="150px" src={AKQAlogo} alt="AKQA logo" />
          <section id="description">
            <h1>Your Basket</h1>
            <p>
              Items you have added to your header are shown below. <br></br>
              Adjust the quantities or remove items before continuing your
              purchase.
            </p>
          </section>
          <section id="productList">
            <Table
              items={this.state.items}
              quantityHandler={this.handleAmount}
            />
          </section>
          <section id="priceCalculation">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>£{this.state.subTotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT @ 20%</td>
                  <td>£{this.state.vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>
                    <b>Total Cost</b>
                  </td>
                  <td>
                    <b>£{this.state.total.toFixed(2)}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <button id="buyButton">Buy Now »</button>
        </main>
        <footer>
          <p>
            <b>&#9400; 2013 AKQA Ltd.</b> Registered in England: 2964394
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
