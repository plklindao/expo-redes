import React from "react";
import { Text } from "react-native";
export default function Saudacao({nome}){
    return(
        <Text style={{fontSize:28, marginBottom:17, marginLeft: '33dvw'}}>
            Olá {nome}
        </Text>
    )
}