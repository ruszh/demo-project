import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    selectedOption: "name",
    query: "",
    value: ""
  };

  changeHandler = e => {
    if (e.target.tagName === "SELECT") {
      this.setState({
        selectedOption: e.target.value
      });
    } else {
      this.setState({
        value: e.target.value
      });
    }
  };

  searchHandler = () => {
    const { onSearch, getCustomers } = this.props;
    const option = this.state.selectedOption;
    const value = this.state.value;
    if (!value) {
      getCustomers();
    } else {
      onSearch(`/${option}/${value}`);
    }
  };

  render() {
    return (
      <div>
        <div className="input-group col-9">
          <button
            type="button"
            onClick={this.searchHandler}
            className="btn btn-success"
          >
            {/* <i className="material-icons" style={{ fontSize: "24px", paddingRight: '5px' }}>
              search
            </i> */}
            Serach
          </button>
          <select
            className="search-select custom-select col-sm-3"
            onChange={this.changeHandler}
          >
            <option defaulvalue="true">Name</option>
            <option value="surname">Surname</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
          <input
            type="text"
            className="search-input form-control"
            aria-label="Text input with segmented dropdown button"
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired
};

export default Search;
