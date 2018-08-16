import React, { Component } from "react";
import Modal from "react-responsive-modal";

class Customer extends Component {
  state = {
    open: false,
    customer: {}
  };

  componentWillMount() {
    this.setState({
      customer: this.props.customer
    });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  submitHandler = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const customer = this.state.customer;
    customer[event.target.name] = event.target.value;
    this.setState({
      customer: customer
    });
  };

  render() {
    const { open, customer } = this.state;

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
              <form onSubmit={this.submitHandler} onChange={this.handleChange}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={customer.name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="Surname"
                    value={customer.surname}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone number"
                    value={customer.phone}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="email"
                    value={customer.email}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Date of birth:</label>
                  <input
                    type="text"
                    name="date_of_birth"
                    className="form-control"
                    placeholder="Date of birth"
                    value={customer.date_of_birth}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Notes:</label>
                  <textarea
                    className="form-control"
                    name="notes"
                    placeholder="Date of birth"
                    value={customer.notes}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </td>
      </tr>
    );
  }
}

export default Customer;

