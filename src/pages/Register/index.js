import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {Content, Form, Item, Label, Input, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {addUser} from '../../store/modules/users/actions';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#FFF',
    fontSize: 14,
  },
  buttonCancel: {
    color: '#d9534f',
  },
  logo: {
    height: Dimensions.get('window').height * 0.2,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    borderRadius: 250,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 40,
  },
});

const Register = (props) => {
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [rg, setRg] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [cnh, setCnh] = useState(null);
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();

  const save = () => {
    console.log(name, cpf, rg, titulo, cnh, email);
    dispatch(
      addUser({
        name,
        cpf,
        rg,
        titulo,
        cnh,
        email,
      }),
    );
    props.navigation.navigate('Main');
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      style={styles.container}
      resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label style={styles.instructions}>Nome</Label>
            <Input
              style={styles.instructions}
              returnKeyType="next"
              onChangeText={(text) => setName(text)}
              onSubmitEditing={() => this.cpfInput.focus()}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.instructions}>CPF</Label>
            <Input
              style={styles.instructions}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(text) => setCpf(text)}
              onSubmitEditing={() => this.rgInput.focus()}
              ref={(input) => (this.cpfInput = input)}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.instructions}>RG</Label>
            <Input
              style={styles.instructions}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(text) => setRg(text)}
              onSubmitEditing={() => this.tituloInput.focus()}
              ref={(input) => (this.rgInput = input)}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.instructions}>Titulo de eleitor</Label>
            <Input
              style={styles.instructions}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(text) => setTitulo(text)}
              onSubmitEditing={() => this.cnhInput.focus()}
              ref={(input) => (this.tituloInput = input)}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.instructions}>CNH</Label>
            <Input
              style={styles.instructions}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(text) => setCnh(text)}
              onSubmitEditing={() => this.emailInput.focus()}
              ref={(input) => (this.cnhInput = input)}
            />
          </Item>
          <Item floatingLabel>
            <Label style={styles.instructions}>E-mail</Label>
            <Input
              style={styles.instructions}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => save()}
              ref={(input) => (this.emailInput = input)}
            />
          </Item>
        </Form>
        <Button
          bordered
          light
          full
          style={styles.button}
          onPress={() => save()}>
          <Text style={styles.instructions}>Enviar</Text>
        </Button>
        <Button
          bordered
          danger
          full
          style={styles.button}
          onPress={() => props.navigation.navigate('Main')}>
          <Text style={styles.buttonCancel}>Cancelar</Text>
        </Button>
      </Content>
    </ImageBackground>
  );
};

export default Register;
