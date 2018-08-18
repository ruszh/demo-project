import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./Customer.css";

class Customer extends Component {
  state = {
    open: false,
    customer: {},
    editMode: false,
    editedCustomer: null
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
    if (this.state.editedCustomer === null) return;
    this.setState({
      customer: this.state.editedCustomer,
      editedCustomer: null,
      open: false,
      editMode: false
    });
  };

  handleChange = event => {
    const { customer, editedCustomer } = this.state;
    const customerCopy = Object.assign({}, editedCustomer ? editedCustomer : customer);
    customerCopy[event.target.name] = event.target.value;
    this.setState({
      editedCustomer: customerCopy
    });
  };

  handleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  handleCancel = () => {
    this.setState({
      editedCustomer: null,
      editMode: false
    });
  };

  render() {
    const { open, customer, editMode, editedCustomer } = this.state;

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
                    className="form-control not-edit"
                    placeholder="Name"
                    value={editedCustomer ? editedCustomer.name : customer.name}
                    disabled={!editMode}
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="surname"
                    className="form-control not-edit"
                    placeholder="Surname"
                    value={
                      editedCustomer ? editedCustomer.surname : customer.surname
                    }
                    disabled={!editMode}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control not-edit"
                    placeholder="Phone number"
                    value={
                      editedCustomer ? editedCustomer.phone : customer.phone
                    }
                    disabled={!editMode}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control not-edit"
                    aria-describedby="emailHelp"
                    placeholder="email"
                    value={
                      editedCustomer ? editedCustomer.email : customer.email
                    }
                    disabled={!editMode}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Date of birth:</label>
                  <input
                    type="text"
                    name="date_of_birth"
                    className="form-control not-edit"
                    placeholder="Date of birth"
                    value={
                      editedCustomer
                        ? editedCustomer.date_of_birth
                        : customer.date_of_birth
                    }
                    disabled={!editMode}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Notes:</label>
                  <textarea
                    className="form-control not-edit"
                    name="notes"
                    placeholder="Date of birth"
                    value={
                      editedCustomer ? editedCustomer.notes : customer.notes
                    }
                    disabled={!editMode}
                  />
                </div>

                {this.state.editMode ? (
                  <button
                    onClick={this.handleCancel}
                    className="btn btn-danger float-left"
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={this.handleEdit}
                    className="btn btn-success float-left"
                  >
                    Edit
                  </button>
                )}

                <button type="submit" className="btn btn-primary float-right">
                  Save
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
