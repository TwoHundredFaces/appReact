import React, { Component } from "react";
import { View, Text } from "react-native";


/* Componentes */

class App extends Component {
  render() {
    return (
      <View>
        <Text style={{ margin: 25, fontSize: 25, textAlign: 'center' }}>
          Hyan 2: Mais vacilão ainda!
        </Text>
        <Text style={{ marginLeft: 15, color: 'blue' }}>Gabriel também</Text>
      </View>
    );
  }
}

export default App;

/*
function App() {
  return (
    <View>
      <Text>Hyan vacilão</Text>
    </View>
  )
}*/