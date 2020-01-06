import React, { Component } from "react";
import AKQAlogo from "./AKQA-Logo.svg";
import "./App.css";
import Table from "./Components/Table";
import items from "./items.json";
import axios from "axios";

class App extends Component {
  state = {
    subTotal: 0,
    vat: 0,
    total: 0,
    items: [...items]
  };

  calcPrice = () => {
    let subTotal = 0;
    this.state.items.forEach(item => {
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
            () => this.calcPrice()
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
            () => this.calcPrice()
          );
        }
      });
    } else {
      this.state.items.forEach((item, index) => {
        if (item.id === id) {
          if (Number(event) !== 0) {
            newItems[index].amount = Number(event).toFixed(0);
          } else {
            newItems[index].amount = event;
          }
          if (newItems[index].amount < 0 || newItems[index].amount === "0") {
            newItems[index].amount = 1;
          }
          this.setState(
            {
              items: newItems
            },
            () => this.calcPrice()
          );
        }
      });
    }
  };

  handleBlur = id => {
    let newItems = [...this.state.items];
    this.state.items.forEach((item, index) => {
      if (item.id === id && !item.amount) {
        newItems[index].amount = 1;
        this.setState(
          {
            items: newItems
          },
          () => this.calcPrice()
        );
      }
    });
  };

  handleDelete = id => {
    let newItems = [...this.state.items];
    this.state.items.forEach((item, index) => {
      if (item.id === id) {
        newItems.splice(index, 1);
        this.setState(
          {
            items: newItems
          },
          () => this.calcPrice()
        );
      }
    });
  };

  handleSubmit = event => {
    if (event.target.className === "activated") {
      let itemAmount = 0;
      this.state.items.forEach(item => {
        itemAmount += item.amount;
      });

      axios
        .post("/about:blank", this.state)
        .then(response => {
          alert(
            `Your order has been succesfully submitted. You bought ${itemAmount} items worth £${this.state.total.toFixed(
              2
            )} in total.`
          );
          this.setState({
            submit: true
          });
        })
        .catch(err => {
          console.log("err", err);
          alert(
            `Your order has been succesfully submitted. You bought ${itemAmount} items worth £${this.state.total.toFixed(
              2
            )} in total.`
          );
        });
    }
  };

  render() {
    let buyButtonState = "activated";
    if (!this.state.items.length) {
      buyButtonState = "deactivated";
    }
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
              blur={this.handleBlur}
              delete={this.handleDelete}
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
          <button
            id="buyButton"
            className={buyButtonState}
            type="submit"
            onClick={this.handleSubmit}
          >
            Buy Now »
          </button>
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
