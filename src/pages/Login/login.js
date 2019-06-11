import React, { Component } from 'react';
import Axios from 'axios';
import { parseJwt } from '../../services/authenticacao/authenticacao';
// import { push } from 'react-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            senha: ""
        }
    }

    atualizaEstadoEmail(event) {
        //Alterar o estado de minha propriedade
        this.setState({ email: event.target.value });
    }
    atualizaEstadoSenha(event) {
        //Alterar o estado de minha propriedade
        this.setState({ senha: event.target.value });
    }
    efetualogin(event) {
        event.preventDefault();
        // alert(this.state.email + " - " + this.state.senha);

        Axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(data => {
                if (data.status === 200) {
                    console.log(data);
                    //Armazenando as informações do usuário no local storage para ser utilizado futuramente
                    localStorage.setItem("usuario-spmedgroup", data.data.token);
                    //Role customizada para conseguirmos pegar o link 
                    console.log(parseJwt());

                    // if (parseJwt().Role === "Administrador") {
                        this.props.history.push("/Usuarios")
                    // } else {
                    //     this.props.history.push("/Especializacoes");
                    // }

                    alert("usuario logado");
                }
                else {
                    alert("Email ou senha inválido");
                }
            })
            .catch(erro => {
                console.log(erro)
                this.setState({ mensagem: 'Email ou senha inválido' });
            }
            )
    }

    render() {
        return (
            <div className="Content">

                {/* <img src="../../assets/imagens/icon-login.png" className="login-body-image"></img> */}

                <h1>Faça seu Login</h1>

                <form onSubmit={this.efetualogin.bind(this)}>
                    <div className="login-body-input">
                        <label>
                            <input type="email" placeholder="Digite se email" onChange={this.atualizaEstadoEmail.bind(this)} value={this.state.email}></input>
                        </label>
                        <label>
                            <input type="password" placeholder="Digite sua senha" onChange={this.atualizaEstadoSenha.bind(this)} value={this.state.senha}></input>
                        </label>
                    </div>
                    <div className="login-body-buttom">
                        <label>
                            <input type="submit" value="Entrar"></input>
                        </label>
                    </div>
                </form>

            </div>
        );
    }
}

export default Login; 