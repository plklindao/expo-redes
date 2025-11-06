import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App(){
  return <ScrollView>
    <Titulo />
    <Saudacao nome='Plk'/>
    <FotoPerfil />

    <CartaoUsuario 
    nome='Plk'
    idade='18'
    rede_social='plk lindo'
    img='perfil01'
    />
    </ScrollView>

 
}