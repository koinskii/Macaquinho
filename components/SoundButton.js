import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Audio } from "expo-av";

export default class SoundButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pressedButtonIndex: ""
    }
  }


  playSound = async (soundChunk) => {
    var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink
      }, {
      shouldPlay: true
    }

    )
  }

  render() {
    return (
      <TouchableOpacity

        style={this.props.buttonIndex === this.state.pressedButtonIndex ?

          [styles.chunkButton, { backgroundColor: 'white' }]
          :
          [styles.chunkButton, { backgroundColor: 'red' }]

        }

        onPress={() => {
          this.setState({ pressedButtonIndex: this.props.buttonIndex })
          this.playSound(this.props.phones)
        }} >

        <Text style={
          this.props.buttonIndex === this.state.pressedButtonIndex ?

            [styles.displayText, { color: 'red' }]
            :
            [styles.displayText, { color: 'white' }]



        }
        >

          {this.props.chunks}</Text>

      </TouchableOpacity>
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