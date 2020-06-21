import React, {useState, useRef} from 'react';
import {
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {withTheme} from 'styled-components';
import {
  Form,
  Item,
  Button,
  Text,
  Icon,
  Input,
  Content,
  Container,
  H1,
  H3,
  Footer,
} from 'native-base';

import styles from './styles';

const StepTwo = ({theme, navigation, route}) => {
  const {uid, name, email} = route.params;
  const [rg, setRg] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [cnh, setCnh] = useState(null);
  const [cpf, setCpf] = useState(null);
  const cpfRef = useRef(null);
  const rgRef = useRef(null);
  const tituloRef = useRef(null);
  const cnhRef = useRef(null);
  const newStyle = styles(theme);

  const nextStep = () => {
    navigation.navigate('StepThree', {
      uid,
      name,
      email,
      cpf,
      rg,
      titulo,
      cnh,
    });
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
          <Content padder={true} contentContainerStyle={newStyle.container}>
            <H1
              style={{
                color: '#FFF',
                fontWeight: '600',
                marginTop: 50,
                alignSelf: 'center',
              }}>
              Muito bem, {name}
            </H1>
            <H3 style={{textAlign: 'center', color: '#FFF', marginTop: 50}}>
              Agora me forneça o que você não quer mais esquecer
            </H3>
            <Form style={{marginTop: 50}}>
              <Item
                underline={false}
                disabled
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  marginTop: 10,
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}>
                <Input
                  ref={cpfRef}
                  selectionColor="#fff"
                  onSubmitEditing={() => rgRef.current._root.focus()}
                  placeholderTextColor="#FFF"
                  keyboardType="numeric"
                  returnKeyType={'next'}
                  placeholder="CPF"
                  style={{color: '#FFF'}}
                  value={cpf}
                  onChangeText={(text) => setCpf(text)}
                />
              </Item>
              <Item
                underline={false}
                disabled
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  marginTop: 10,
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}>
                <Input
                  ref={rgRef}
                  onSubmitEditing={() => tituloRef.current._root.focus()}
                  placeholderTextColor="#FFF"
                  placeholder="RG"
                  returnKeyType={'next'}
                  keyboardType="numeric"
                  style={{color: '#FFF'}}
                  value={rg}
                  onChangeText={(text) => setRg(text)}
                />
              </Item>
              <Item
                underline={false}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  marginTop: 10,
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}>
                <Input
                  ref={tituloRef}
                  onSubmitEditing={() => cnhRef.current._root.focus()}
                  keyboardType="numeric"
                  style={{color: '#FFF'}}
                  returnKeyType={'next'}
                  placeholder="Titulo de Eleitor"
                  placeholderTextColor="#FFF"
                  value={titulo}
                  onChangeText={(text) => setTitulo(text)}
                />
              </Item>
              <Item
                underline={false}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  marginTop: 10,
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  paddingHorizontal: 5,
                }}>
                <Input
                  ref={cnhRef}
                  placeholderTextColor="#FFF"
                  placeholder="Carteira de Habilitação"
                  onSubmitEditing={() => nextStep()}
                  keyboardType="numeric"
                  returnKeyType={'done'}
                  style={{color: '#FFF'}}
                  value={cnh}
                  onChangeText={(text) => setCnh(text)}
                />
              </Item>
            </Form>
            {!!name && !!cpf && (
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

export default withTheme(StepTwo);
