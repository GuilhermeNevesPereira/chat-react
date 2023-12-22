import React, { Component } from "react";
import './App.css';
import Comentario from "./components/Comentario";
import icone from "./icons/send.svg"

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "João",
        email: "joao@example.com",
        data: new Date(),
        texto: 'Olá pessoal'
      },
      {
        nome: "Maria",
        email: "maria@example.com",
        data: new Date(),
        texto: 'Bom dia'
      },
      {
        nome: "Carlos",
        email: "carlos@example.com",
        data: new Date(),
        texto: 'Eai Time'
      }
    ],
    novoComentario: "",
  }

  adicionarComentario = () => {
    const {novoComentario} = this.state;
    if (novoComentario.trim() !== "") {
      this.setState(prevState => ({
        comentarios: [
          ...prevState.comentarios,
          {
            nome: "Guilherme",
            email: "guineves@gmail.com",
            data: new Date(),
            texto: novoComentario,
          }
        ],
        novoComentario: "",
      }));
    }
  }

  handleInputChange = (event) => {
    this.setState({ novoComentario: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Chat React</h1>
          {this.state.comentarios.map((comentario, index) => (
            <Comentario
              key={index}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}
            >
              {comentario.texto}
            </Comentario>
          ))}
          <div className="container">
            <input 
              placeholder="Faça um comentário..."
              value={this.state.novoComentario}
              onChange={this.handleInputChange}
            />
            <button onClick={() => this.adicionarComentario()}>
              <img src={icone} alt="Enviar"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
