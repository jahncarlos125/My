import React from 'react';

import {
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Button, Text, Icon, CardItem, Body, ListItem} from 'native-base';
import {useSelector} from 'react-redux';
import {TextInputMask} from 'react-native-masked-text';

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
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.15,
    marginVertical: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
    borderRadius: 250,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFF',
  },
});

const Item = (props) => {
  return (
    <View style={styles.card}>
      <Text style={{color: 'blue', fontWeight: 'bold', padding: 10}}>
        {props.name}
      </Text>
      <ListItem>
        <Text>CPF: </Text>
        <TextInputMask
          style={{padding: 0}}
          type={'custom'}
          options={{
            mask: '999.999.999-99',
          }}
          value={props.cpf}
        />
      </ListItem>
      <ListItem>
        <Text>RG: </Text>
        <TextInputMask
          style={{padding: 0}}
          type={'custom'}
          options={{
            mask: '99.999.999-99',
          }}
          value={props.rg}
        />
      </ListItem>
      <ListItem>
        <Text>Titulo: </Text>
        <TextInputMask
          style={{padding: 0}}
          type={'custom'}
          options={{
            mask: '9999 9999 9999',
          }}
          value={props.titulo}
        />
      </ListItem>
      <ListItem>
        <Text>CNH: </Text>
        <TextInputMask
          style={{padding: 0}}
          type={'custom'}
          options={{
            mask: '99999999999',
          }}
          value={props.cnh}
        />
      </ListItem>
      <ListItem>
        <Text>E-mail: </Text>
        <Text>{props.email}</Text>
      </ListItem>
    </View>
  );
};

const Main = (props) => {
  const {users} = useSelector((state) => state.users);
  return (
    <ImageBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      style={styles.container}
      resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{
              uri: 'https://i.imgur.com/jzOafDp.png',
            }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcome}>Minha Carteira</Text>
          <Button
            full
            rounded
            dark
            style={styles.button}
            onPress={() => props.navigation.navigate('Register')}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Cadastrar</Text>
          </Button>
          {users.map((item) => (
            <Item
              key={item.cpf}
              name={item.name}
              cpf={item.cpf}
              rg={item.rg}
              titulo={item.titulo}
              cnh={item.cnh}
              email={item.email}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Main;
