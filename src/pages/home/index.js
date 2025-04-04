import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { ModalPassword } from '../../components/modal'

export function Home() {

  let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    console.log("Clicou")
    let password = ""
    for (let i = 0, n = caracteres.length; i < size; i++) {
      password += caracteres.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true);

    console.log(password)
  }


  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.webp')}
        style={styles.logo}
        />

      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider 
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={ (value) => setSize(parseInt(value.toFixed(0))) }
          />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.btnText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false) }/>
      </Modal>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',

  },

  logo: {
    marginBottom: 60,
    height: 250,
    width: 250,
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#12b575',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }


})