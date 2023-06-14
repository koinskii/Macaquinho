import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header, Image } from "react-native-elements";
import SoundButton from "./components/SoundButton";
import db from "./localdb";


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
              this.setState({ 
                chunks: db[this.state.text].chunks ,
                phones: db[this.state.text].phones
              });
            }}>
            <Text style={styles.buttonText}>IR</Text>
          </TouchableOpacity>

          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <SoundButton
                  chunks={item}
                  phones = {this.state.phones[index]}
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