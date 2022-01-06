// import menuImg from '../../assets/coolicon.svg';
import logoImg from "../../assets/consulta.svg";
import "../Header/Header.css";
import React, { useState } from "react";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";

export function Header() {
  const { setPages, usuario } = useContext(PagesContext);
  return (
    <div className="Container">
      <div className="Content">
        <div className="logoNome">
          <img
            src={logoImg}
            alt="sanduiche"
            className="logo"
            onClick={() => setPages("home")}
          />
          <h1>SysEnade</h1>
        </div>
        <div className="usuario">
          <h2>
            Bem vindo(a),<span> {usuario.nome}</span>
          </h2>
        </div>
        <div>
          <button class="btn btn-primary me-2" onClick={() => setPages('login')}>Sair</button>
        </div>
      </div>
    </div>
  );
}
