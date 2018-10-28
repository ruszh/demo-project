import React, { Component } from "react";
import "./Customer.css";
import axios from "axios";
import ModalWindow from "../ModalWindow/ModalWindow";
import config from "../../config";

class Customer extends Component {
  state = {
    open: false,
    customer: {}
  };

  componentWillMount() {
    this.setState({
      customer: this.props.data
    });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({
      open: false
    });
  };

  updateHandler = data => {
    const url = `${config.URL}/${this.state.customer.id}`;
    return axios
      .put(url, data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        if (res.data === "OK")
          this.setState({
            open: false
          });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { open, customer } = this.state;


    return (
      <tr>
        <td>{customer.first_name}</td>
        <td>{customer.second_name}</td>
        <td>{customer.third_name}</td>
        <td>{customer.phone}</td>
        <td>
          <button className="btn btn-action" onClick={this.onOpenModal}>
            Detail
          </button>
          <ModalWindow
            customer={customer}
            open={open}
            closeModal={this.onCloseModal}
            onSubmit={this.updateHandler}
          />
        </td>
      </tr>
    );
  }
}

export default Customer;
