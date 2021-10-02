import React, { useState } from "react";
import { View, TextInput, StyleSheet,Text,Pressable } from "react-native";

const Login = () => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.login}>
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
            <Pressable><Text style={styles.esqueci}>Esqueci minha senha</Text></Pressable>
            <Pressable><Text style={styles.cadastro}>Cadastre-se</Text></Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4882D',
        alignItems:'center',
        justifyContent:'center'
    },
    login: {
        flex: 1,
        backgroundColor: '#BA76C9',
        marginTop: 100,
        marginBottom:100,
        elevation:20,
    },
    input: {
      height: 60,
      width: 250,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: '#000000'
    },
    texto:{
        padding: 10,
        color: '#000000',
        fontSize:24,
        fontWeight: '400',
    },
    esqueci:{
        color:'#550000',
        alignSelf:'center',
        fontSize:15,
        fontWeight: '300',
    },
    cadastro:{
        color: '#550000',
        alignSelf:'flex-end',
        paddingRight:10,
        paddingBottom:10,
        paddingTop:10,
        fontSize:17,
        fontWeight: '300',
    }
  });

export default Login;