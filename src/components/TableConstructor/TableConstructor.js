import React, { Component } from "react";
import PropTypes from "prop-types";

function TableConstructor(WrappedComponent) {
  return class extends Component {
    render() {
      const { items, fields } = this.props;
      return (
        <table className="table table-hover col-10">
          <thead>
            <tr>
              {fields.map((field, index) => (
                <th scope="col" key={index}>
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <WrappedComponent data={item} key={item.id} />
            ))}
          </tbody>
        </table>
      );
    }
  };
}

TableConstructor.propTypes = {
  items: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired
}

export default TableConstructor;
