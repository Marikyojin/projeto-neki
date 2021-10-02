import React from "react";
import { View, Image, Text,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = (props) => {
    const {url,nome,versao}= props;
    return (
        <View style={styles.container}>
            <Image 
            style={{width: 90, height: 90}}
            source={{uri:url}}></Image>
            <View style={{alignItems:'center'}}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.versao}>{versao}</Text>
            </View>
            <Icon style={styles.icones} name="info-circle"></Icon>
            <Icon style={styles.icones} name="plus-circle"></Icon>
        </View>
    );
}

export default Card;

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000036',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '5%',
        paddingBottom:'5%',
        marginTop: '5%',
        elevation:20,
    },
    nome:{
        fontSize: 26,
        fontWeight:'bold',
        color:  '#BF55EC',
    },
    versao:{
        fontSize: 24,
        fontWeight:'normal',
        color:  '#BF55EC',
    },
    icones:{
        fontSize: 26,
        color:  '#BF55EC',
    }
})