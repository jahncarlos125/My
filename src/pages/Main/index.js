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
import {Button, Text, Icon, CardItem, Body, ListItem, Left} from 'native-base';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import {TextInputMask, TextMask} from 'react-native-masked-text';

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
      <ListItem>
        <Icon name="contact" style={{color: '#7159c1'}} />
        <Body>
          <Text
            style={{
              color: '#7159c1',
              fontWeight: 'bold',
              padding: 10,
              textAlign: 'center',
            }}>
            {props.name}
          </Text>
        </Body>
      </ListItem>
      <ListItem>
        <Text>CPF: </Text>
        <TextMask
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
        <TextMask
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
        <TextMask
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
        <TextMask
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

const ItemAdress = (props) => {
  return (
    <View style={styles.card}>
      <ListItem>
        <Icon name="home" style={{color: '#7159c1'}} />
        <Body>
          <TextMask
            style={{
              color: '#7159c1',
              fontWeight: 'bold',
              padding: 10,
              textAlign: 'center',
            }}
            type={'custom'}
            options={{
              mask: '99.999-999',
            }}
            value={props.cep}
          />
        </Body>
      </ListItem>
      <ListItem noIndent>
        <Icon name="arrow-dropright" style={{color: '#7159c1'}} />
        <Body>
          <Text>{props.logradouro}</Text>
        </Body>
      </ListItem>
      <ListItem noIndent>
        <Icon name="arrow-dropright" style={{color: '#7159c1'}} />
        <Body>
          <Text>{props.num}</Text>
        </Body>
      </ListItem>
      <ListItem noIndent>
        <Icon name="arrow-dropright" style={{color: '#7159c1'}} />

        <Body>
          <Text>{props.bairro}</Text>
        </Body>
      </ListItem>
      <ListItem noIndent>
        <Icon name="arrow-dropright" style={{color: '#7159c1'}} />

        <Body>
          <Text>{props.complemento}</Text>
        </Body>
      </ListItem>
      <ListItem noIndent>
        <Icon name="arrow-dropright" style={{color: '#7159c1'}} />

        <Body>
          <Text>{props.cidade}</Text>
        </Body>
      </ListItem>
      <ListItem noIndent>
        <Icon name="arrow-dropright" style={{color: '#7159c1'}} />

        <Body>
          <Text>{props.uf}</Text>
        </Body>
      </ListItem>
    </View>
  );
};

const Main = (props) => {
  const {users} = useSelector((state) => state.users);
  const {address} = useSelector((state) => state.address);
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
          <LottieView
            source={require('../../assets/wallet.lottie.json')}
            autoPlay
            loop
            style={{width: 120, alignSelf: 'center'}}
          />
          <Text style={styles.welcome}>Minha Carteira</Text>
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
          {address.map((item) => (
            <ItemAdress
              key={item.id}
              cep={item.cep}
              complemento={item.complemento}
              num={item.num}
              bairro={item.bairro}
              cidade={item.cidade}
              logradouro={item.logradouro}
              uf={item.uf}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Main;
