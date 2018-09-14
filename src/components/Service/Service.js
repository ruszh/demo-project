import React, { Component } from "react";

class Service extends Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.initialPrice}</td>
                <td>{data.price}</td>
                <td>{data.serviceCategory.name}</td>
                <td>{data.time}</td>            
             </tr>
        ) 
    }
}

export default Service;