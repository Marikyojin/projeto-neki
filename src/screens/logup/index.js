import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import Botao from "../../componets/botao";

const Logup = () => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [nome,onChangeNome] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.login}>
            <Text style={styles.texto}>Nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Nome"
                    keyboardType="name-phone-pad"
                />
                <Text style={styles.texto}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="E-mail"
                    keyboardType="email-address"
                />
                <Text style={styles.texto}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="senha"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
                <Botao 
                title="Cadastrar"
                ></Botao>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4882D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        flex: 1,
        backgroundColor: '#BA76C9',
        marginTop: 100,
        marginBottom: 100,
        elevation: 20,
    },
    input: {
        height: 60,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#000000'
    },
    texto: {
        padding: 10,
        color: '#000000',
        fontSize: 24,
        fontWeight: '400',
    },
    
});


export default Logup;