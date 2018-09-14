import React, { Component } from "react";

class TestComponent extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <p>
                    This is test component
                </p>
            </div>
        )
    }
}

export default TestComponent;