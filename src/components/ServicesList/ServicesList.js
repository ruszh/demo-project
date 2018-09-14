import React, { Component } from "react";
import CreateTable from "../CreateTable/CreateTable";
import Preloader from "../Preloader/Preloader";
import Service from '../Service/Service';

class ServicesList extends Component {
  componentWillMount() {
    this.props.getServicesList();
  }
  render() {
    const { servicesList, isLoading } = this.props;
    const ServicesTable = CreateTable(Service);
    const fields = ['Name', 'Initial Price', 'Price', 'Service Category', 'Time']
    return (
      <div>
        <h1>Services</h1>
        <ServicesTable items={servicesList} fields={fields} />
        {isLoading && <Preloader />}
      </div>
    );
  }
}

export default ServicesList;
