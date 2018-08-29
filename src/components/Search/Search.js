import React, { Component } from "react";

class Search extends Component {
  state = {
    selectedOption: "name",
    query: ""
  };
  changeHandler = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  inputSearchHandler = e => {
    const { onSearch } = this.props;
    const option = this.state.selectedOption;
    const value = e.target.value;
    if(!value) {
      onSearch('');
    }
    else {
      onSearch(`/${option}/${value}`)
    }
  };

  render() {
    return (
      <div>
        <div className="input-group col-9">
          {/* <button type="button" onClick={this.searchHandler} className="btn btn-outline-secondary">
            get state
          </button> */}
          <select className="custom-select col-3" onChange={this.changeHandler}>
            <option defaulvalue="true">Name</option>
            <option value="surname">Surname</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
            onChange={this.inputSearchHandler}
          />
        </div>
      </div>
    );
  }
}

export default Search;
