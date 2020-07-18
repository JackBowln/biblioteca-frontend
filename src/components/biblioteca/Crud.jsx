import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'



const headerProps = {
    icon: 'users',
    title: 'Livros',
    subtitle: 'Cadastro de Livros'
}

const baseUrl = 'https://my-json-server.typicode.com/JackBowln/biblioteca-backend/livros'
const initialState = {
    livros: { autor: '', titulo: '', numpag: '', editor: '', tema: '' },
    list: []
}

export default class Crud extends Component {
    
    state = { ...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp =>{
            this.setState({list:resp.data})
        })
    }

    clear() {
        this.setState({livros: initialState.livros})
    }
    save(){
        const livros = this.state.livros
        const method = livros.id? 'put' : 'post'
        const url = livros.id ? `${baseUrl}/${livros.id}` : baseUrl
        axios[method](url, livros)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({livros: initialState.livros, list})
            })
    }
    
    getUpdatedList(livros, add = true) {
        const list = this.state.list.filter(u => u.id !== livros.id)
        if(add) list.unshift(livros)
        return list
    }
    updateField(event){
        const livros = { ...this.state.livros}
        livros[event.target.name] = event.target.value
        this.setState({livros})
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Autor </label>
                            <input type="text" className="form-control"
                             name="autor"
                              value={this.state.livros.autor} onChange={e => this.updateField(e)} 
                              placeholder="Digite o nome do autor..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Título </label>
                            <input type="text" className="form-control" 
                            name="titulo" value={this.state.livros.titulo} onChange={e => this.updateField(e)} 
                            placeholder="Digite o título do livro..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número de páginas </label>
                            <input type="text" className="form-control" 
                            name="numpag" value={this.state.livros.numpag} onChange={e => this.updateField(e)} 
                            placeholder="Digite o número de páginas..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Editora  </label>
                            <input type="text" className="form-control" 
                            name="editor" value={this.state.livros.editor} onChange={e => this.updateField(e)} 
                            placeholder="Digite o nome da editora..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Tema </label>
                            <input type="text" className="form-control" 
                            name="tema" value={this.state.livros.tema} onChange={e => this.updateField(e)} 
                            placeholder="Digite o nome do autor..."/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar    
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>  
                </div>
            </div>
        )
    }

    load(livros) {
        this.setState({livros})
    }

    remove(livros) {
        axios.delete(`${baseUrl}/${livros.id}`).then(resp => {
            const list = this.getUpdatedList(livros, false)
            this.setState({ list })
        })
    }
    
    
    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Autor</th>
                        <th>Título</th>
                        <th>#Pags</th>
                        <th>Editora</th>
                        <th>Tema</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows() {
        return this.state.list.map(livros => {
            return (
                <tr key={livros.id}>
                    <td>{livros.id}</td>
                    <td>{livros.autor}</td>
                    <td>{livros.titulo}</td>
                    <td>{livros.numpag}</td>
                    <td>{livros.editor}</td>
                    <td>{livros.tema}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={() => this.load(livros)}>
                            <i className= 'fa fa-pencil'></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(livros)}>
                            <i className= 'fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
