import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header, Image } from "react-native-elements";
import SoundButton from "./components/SoundButton";
import db from "./db_1.json";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      displayText: "",
      phones: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#BC8F8F'}
            centerComponent={{
              text: 'Macaquinho Fofo',
              style: { color: '#fff', fontSize: 20, fontFamily: "comic" },
            }}
          />

          <Image source={require("./assets/macaquin.png")}
            style={styles.imageIcon} />

          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              var newText = this.state.text.toLowerCase().trim()

              //if e else
              db[newText]
              ?
              

              this.setState({
                chunks: db[newText].chunks,
                phones: db[newText].phones
              })
              :
              Alert.alert("Palavra não encontrada :P")
            }}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>

          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <SoundButton
                  chunks={item}
                  phones={this.state.phones[index]}
                  buttonIndex={index}
                />
              )
            })}
          </View>

        </View>


      </SafeAreaProvider>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#959595',
  },
  inputBox: {
    marginTop: 200,
    width: "80%",
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  }
});