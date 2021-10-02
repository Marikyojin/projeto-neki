import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from './src/header';
import Home from './src/screens/home';
import Login from './src/screens/login';
import Logup from './src/screens/logup';
import Usuario from './src/screens/usuario';
  
const App = () => {
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#B4882D'}} >
      
      <ScrollView>
        <Header></Header>
        <Home></Home>
       
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
