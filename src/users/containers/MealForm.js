import React, { Component } from "react";
import { connect } from "react-redux";

export class MealForm extends Component {
  render() {
    return (
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center font-up font-bold deep-orange-text py-4">
              Cadastre o cardápio do dia
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealForm);
