// Comentario.js
import React from "react";
import './Comentario.css';

const Comentario = props => {
    const formataHora = props.data.toString().split('G')[0].trim()
    return (
        <div className="Comentario">
            <div className="UserInfo">
                <h2>{props.nome}</h2> 
                <p>{formataHora}</p>
            </div>
            <div className="Email">
                <p>{props.email}</p>
            </div>
            <div className="texto">
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default Comentario;
