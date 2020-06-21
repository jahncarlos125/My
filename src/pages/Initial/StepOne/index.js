import React, {useState, useRef, useEffect} from 'react';
import {
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {withTheme} from 'styled-components';
import LottieView from 'lottie-react-native';
import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';
import {
  Form,
  Item,
  Button,
  Text,
  Label,
  Input,
  Content,
  Container,
  H1,
  H3,
  Footer,
} from 'native-base';

import styles from './styles';

const StepOne = ({theme, navigation}) => {
  const uid = uuidv1();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const newStyle = styles(theme);
  const emailRef = useRef(null);

  const nextStep = () => {
    if (name && email) {
      navigation.navigate('StepTwo', {
        uid,
        name,
        email,
      });
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <ImageBackground
        source={{
          uri:
            'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
        }}
        style={newStyle.container}
        resizeMode="cover">
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.select({
            ios: 'padding',
            android: null,
          })}>
          <Content>
            <H1
              style={{
                color: '#FFF',
                fontWeight: '600',
                marginTop: 50,
                alignSelf: 'center',
              }}>
              Olá
            </H1>
            <LottieView
              source={require('../../../assets/wallet.lottie.json')}
              autoPlay
              loop
              style={{width: 200, alignSelf: 'center'}}
            />
            <H3 style={{textAlign: 'center', color: '#FFF', marginTop: 20}}>
              Eu não vou te deixar esquecer mais nenhuma informação importante!
            </H3>
            <Form style={{marginTop: 30}}>
              <Item
                underline={false}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  marginVertical: 20,
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}>
                <Input
                  onSubmitEditing={() => emailRef.current._root.focus()}
                  placeholderTextColor="#FFF"
                  placeholder="Nome"
                  style={{color: '#FFF'}}
                  value={name}
                  returnKeyType={'next'}
                  onChangeText={(text) => setName(text)}
                />
              </Item>
              <Item
                underline={false}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}>
                <Input
                  label="email"
                  keyboardType="email-address"
                  style={{color: '#FFF'}}
                  placeholder="E-mail"
                  placeholderTextColor="#FFF"
                  ref={emailRef}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  onSubmitEditing={() => nextStep()}
                />
              </Item>
            </Form>
            {!!name && !!email && (
              <Button
                rounded
                style={{
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  width: '80%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 50,
                }}
                onPress={() => {
                  nextStep();
                }}
                textStyle={{textAlign: 'center'}}>
                <Text style={{color: '#7159c1', fontWeight: 'bold'}}>
                  Avançar
                </Text>
              </Button>
            )}
          </Content>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Container>
  );
};

export default withTheme(StepOne);
