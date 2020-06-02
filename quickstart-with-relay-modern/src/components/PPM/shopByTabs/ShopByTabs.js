import React, { Component } from 'react';
import Tabs from "../Tabs/Tabs";
import environment from "../createRelayEnvironment";

 class ShopByTabs extends Component {
      state = {
        vinValue: '',
        partValue: '',
        errMsg: '',
        year: null,
        make: null,
        model: null,
        submodel: null,
        engine: null,
        // userId: getCookie('vehicle_id'),
        savedlist: false,
        addnewvehicle: false,
        searchByPart: false,
        searchByVin: false,
        message: false,
        vehicle: [],
    };

    render() {
        const {
            year,
            make,
            model,
            submodel,
            userId,
            message,
            engine,
            vehicle,
            addnewvehicle,
            savedlist,
            partValue,
            searchByVin,
            vinValue,
            errMsg,
            searchByPart,
        } = this.state;
        return (
          <section className="tabs home">
            <Tabs className="tabs-main">
              <div label="Select your Vehicle" classvalue="tabs-button">
                <div label="Select your Vehicle" classvalue="tabs-button">
                  {vehicle.length > 0 &&
                  vehicle[0].year !== "" &&
                  !addnewvehicle ? (
                    <Vehiclesearch
                      environment={environment}
                      onChange={this.handleVehicleSearch}
                      userId={userId}
                      savedlist={savedlist}
                      showlist={this.showlist}
                      vehicle={vehicle}
                      addnewVehicle={this.handleAddNewVehicle}
                    />
                  ) : (
                    <div className="form-wrapper">
                      <Year
                        environment={environment}
                        onChange={this.handleYearChange}
                        year={year}
                        message={message}
                      />
                      <Make
                        environment={environment}
                        onChange={this.handleMakeChange}
                        year={year}
                        make={make}
                        message={message}
                      />

                      <Model
                        environment={environment}
                        onChange={this.handleModelChange}
                        year={year}
                        make={make}
                        model={model}
                        message={message}
                      />

                      <SubModel
                        environment={environment}
                        onChange={this.handleSubModelChange}
                        year={year}
                        make={make}
                        model={model}
                        submodel={submodel}
                        message={message}
                      />

                      <Engine
                        environment={environment}
                        onChange={this.handleEngineChange}
                        year={year}
                        make={make}
                        model={model}
                        submodel={submodel}
                        engine={engine}
                        message={message}
                      />
                      {vehicle.length > 0 &&
                      vehicle[0].year !== "" &&
                      addnewvehicle ? (
                        <span
                          className="cancel_add_new"
                          onClick={this.handleAddNewCancel}
                          role="presentation"
                        >
                          Cancel
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            </Tabs>
          </section>
        );
    }
}
export default ShopByTabs;