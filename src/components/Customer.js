import React, { Component } from "react";
import Modal from "react-responsive-modal";

class Customer extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { customer } = this.props;
    return (
      <tr key={customer.id}>
        <td>{customer.name}</td>
        <td>{customer.surname}</td>
        <td>{customer.phone}</td>
        <td>
          <button className="btn btn-action" onClick={this.onOpenModal}>
            Detail
          </button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <div className="container">
              <h2>
                {customer.name} {customer.surname}
              </h2>              
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Phone: {customer.phone}</li>
                <li className="list-group-item">Date of birth: {customer.date_of_birth}</li>
                <li className="list-group-item">Email: {customer.email}</li>
                <li className="list-group-item">Notes: {customer.notes}</li>                
              </ul>
            </div>
          </Modal>
        </td>
      </tr>
    );
  }
}

export default Customer;
