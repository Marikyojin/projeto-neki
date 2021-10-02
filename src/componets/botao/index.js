import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";


const Botao = ({ title, handlePress }) => {

  return (
    <View style={Styles.container}>
      <TouchableHighlight onPress={handlePress}>
        <View style={Styles.button}>
          <Text style={Styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};


export default Botao;


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
      padding: 10,
  
    },
    button: {
      paddingLeft: 5,
      paddingRight: 5,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      padding: 10,
      borderRadius: 15,
      elevation: 10,
      width: 100,
      height: 50,
    },
    text: {
      color: '#B4882D',
      fontSize: 14,
      fontWeight: '700',
    },
  });
