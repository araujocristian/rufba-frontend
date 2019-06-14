import React, { Component } from "react";
import { connect } from "react-redux";
import "./MealForm.css";

export class MealForm extends Component {
 
  render() {
    return (
      
      <div className="meal-form-container col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center font-up font-bold deep-orange-text py-4">
              Cadastre o cardápio do dia
            </h2>
            <div class="row">
                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 1</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>

                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 2</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 3</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>

                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 4</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 5</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>

                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 6</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 7</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>

                      <div class="col-md-6">
                      <div class="form-group">
                      <label for="inputState" class="control-label">Opção 8</label>
                      <select class="form-control form-control-lg">
                      <option>Descrição</option>
                      </select>
                    </div>
                    </div>
                    </div>                
                <div className="text-center">
                <button className="btn btn-deep-orange">Cadastrar</button>
              </div>
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