import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
// import Home from './pages/Home/App'
import * as serviceWorker from './serviceWorker';
import Login from "./pages/Login/login";
import Especializacao from './pages/Especizalicacoes/Especializacao';
import Consultas from './pages/Consultas/Consultas';
import Cadastros from './pages/Cadastros/cadastros';
import Usuarios from './pages/Listas/Usuarios';
import Medicos from './pages/Listas/Medicos';
import AtualizarConsultas from './pages/Consultas/AtualizarConsultas'

    const rotas =  (
        <Router>
            <div>
                <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/Medicos" component={Medicos} />
                <Route path="/Usuarios" component={Usuarios}/>
                <Route path="/Especializacoes" component={Especializacao} />
                <Route path="/Consultas" component={Consultas} />
                <Route path="/Atualizar" component={AtualizarConsultas}/>
                <Route path="/Cadastros" component={Cadastros}/>
                {/* <Route component={NaoEncontrada}/> */} 
                </Switch>
            </div>
        </Router>
    )

    
ReactDOM.render(rotas, document.getElementById('root'));

// If you want your ap to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-pWA
serviceWorker.register();
