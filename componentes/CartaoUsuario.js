import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import fotos from '../img/fotos';
import { createEntriesIterator } from "react-native/types_generated/src/private/webapis/utils/ArrayLikeUtils";

export default function CartãoUsuario({ nome, idade, rede_social,endereco,descricao, img }) {
    return (
        <View style={estilos.cartao}>
            <Image source={fotos[img]} style={estilos.foto} />
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.idade}>{idade}</Text>
            <Text style={estilos.rede_social}>{rede_social}</Text>
            <Text style={estilos.endereco}>{endereco}</Text>
             <Text style={estilos.descricao}>{descricao}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#74f0f0ff',
        padding: 60,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#b41616ff',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        width: 100,
        height: 100,
        
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    descricao: {
        fontSize: 14,
        color: '#0c0505ff',
        textAlign: 'center',
    },

    rede_social: {
        fontSize: 14,
        color: '#0c0505ff',
        textAlign: 'center',
    },

    endereco: {
        fontSize: 14,
        color: '#0c0505ff',
        textAlign: 'center',
    },

    idade: {
        fontSize: 14,
        color: '#414141ff',
        textAlign: 'center',
    },
});