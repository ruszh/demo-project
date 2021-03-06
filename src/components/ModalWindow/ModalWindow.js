import React, { Component } from "react";
import Modal from "react-responsive-modal";

class ModalWindow extends Component {
  state = {
    customer: null,
    editMode: false
  };

  handleChange = event => {
    const { customer } = this.state.customer ? this.state : this.props;
    const customerCopy = Object.assign({}, customer);
    customerCopy[event.target.name] = event.target.value;
    this.setState({
      customer: customerCopy
    });
  };

  deleteHandler = () => {
    this.props.onDelete(this.customer.id)
  }

  handleEdit = () => {
    this.setState({
      editMode: true
    });
  };

  handleCancel = () => {
    this.setState({
      editMode: false,
      customer: null
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state.customer);
    this.props.onSubmit(data);
  };

  render() {
    const { editMode } = this.state;
    const { open, closeModal } = this.props;
    const { customer } = this.state.customer ? this.state : this.props;
    return (
      <Modal
        open={open}
        onClose={closeModal}
        center
        styles={{ modal: { borderRadius: '15px' } }}
      >
        <div className="container">
          <form onChange={this.handleChange} onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control not-edit"
                placeholder="Name"
                value={customer.first_name}
                disabled={!editMode}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control not-edit"
                placeholder="Name"
                value={customer.second_name}
                disabled={!editMode}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control not-edit"
                placeholder="Name"
                value={customer.third_name}
                disabled={!editMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                className="form-control not-edit"
                placeholder="Phone number"
                value={customer.phone}
                disabled={!editMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                className="form-control not-edit"
                aria-describedby="emailHelp"
                placeholder="email"
                value={customer.email}
                disabled={!editMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date_of_birth">Date of birth:</label>
              <input
                type="text"
                name="date_of_birth"
                className="form-control not-edit"
                placeholder="Date of birth"
                value={customer.date_of_birth}
                disabled={!editMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes:</label>
              <textarea
                className="form-control not-edit"
                name="notes"
                placeholder="Notes"
                value={customer.notes}
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

            <button
              onClick={this.submitHandler}
              type="submit"
              className="btn btn-primary float-right"
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
    );
  }
}

export default ModalWindow;
