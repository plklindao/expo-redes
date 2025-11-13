import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import fotos from '../img/fotos';


export default function CartãoUsuario({ nome, idade, rede_social, endereco, descricao, img }) {

    const lidarComClique = () => {
        Alert.alert("Ação do Botão", `Você clicou no perfil de ${nome}!`);
    };

    return (
        <View style={estilos.cartao}>
            <Image source={fotos[img]} style={estilos.foto} />
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.idade}>{idade}</Text>
            <Text style={estilos.rede_social}>{rede_social}</Text>
            <Text style={estilos.endereco}>{endereco}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>

            <TouchableOpacity
                style={estilos.botao}
                onPress={lidarComClique}
            >
                <Text style={estilos.textoBotao}>Ver Perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#74f0f0ff',
        padding: 30,
        marginTop: -64,
        margin: 86,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#b41616ff',
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 10,
        width: 250,


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
    botao: {
        marginTop: 15,
        backgroundColor: '#5b82a8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textoBotao: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});