import React from "react";
import { View,Text,StyleSheet, Dimensions } from "react-native";

const Header = () => {
    return(
        <View style={styles.container}><Text style={styles.titulo}>Skill Pub</Text></View>
    );
}

export default Header;

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#099FA4',
        alignItems:'center',
        width: '100%'
    },
    titulo:{
        color: '#1D0029',
        fontSize:45,
    }
})