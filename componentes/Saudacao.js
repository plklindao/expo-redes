import React from "react";
import { Text } from "react-native";
export default function Saudacao({nome}){
    return(
        <Text style={{fontSize:28, marginBottom:5, marginLeft: '46dvw'}}>
            Olá {nome}
        </Text>
    )
}