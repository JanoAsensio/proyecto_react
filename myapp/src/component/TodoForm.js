import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
// Capturar datos ingresados:
    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

// Subir datos capturados:
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('Enviando la informacion..');
    }

// Formulario para cargar datos:
    render () {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Título"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsable"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Descripción"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}
                        >
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoForm;