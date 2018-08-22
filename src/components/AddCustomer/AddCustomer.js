import React, { Component } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import axios from "axios";
import { isEqual } from "lodash";

const emptyCustomer = {
  name: "",
  surname: "",
  date_of_birth: "",
  phone: "",
  email: "",
  notes: ""
};

const URL = "https://thawing-fortress-57364.herokuapp.com/api/customers";

class AddCustomer extends Component {
  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({
      open: false
    });
  };

  postHandler = data => {
    if (isEqual(data, emptyCustomer)) {
      console.log("You can`t add any data");
      return false;
    }
    return axios.post(URL, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  render() {
    const { open } = this.state;
    const wrapperStyle = {
      "margin-bottom": "10px"
    };
    return (
      <div className="float-left" style={wrapperStyle}>
        <button onClick={this.onOpenModal} className="btn btn-primary">
          Add Customer
        </button>
        <ModalWindow
          customer={emptyCustomer}
          open={open}
          closeModal={this.onCloseModal}
          onSubmit={this.postHandler}
        />
      </div>
    );
  }
}

export default AddCustomer;
