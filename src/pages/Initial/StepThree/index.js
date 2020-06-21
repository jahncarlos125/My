import React, {useState, useRef} from 'react';
import {
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {withTheme} from 'styled-components';
import axios from 'axios';
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
import {useDispatch} from 'react-redux';
import {addUser} from '../../../store/modules/users/actions';
import {addAddress} from '../../../store/modules/address/actions';

import styles from './styles';

const StepThree = ({theme, navigation, route}) => {
  const {uid, name, email, cpf, rg, titulo, cnh} = route.params;
  const [addressId, setAddressId] = useState(null);
  const [cep, setCep] = useState(null);
  const [num, setNum] = useState(null);
  const [complemento, setComplemento] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [logradouro, setLogradouro] = useState(null);
  const [uf, setUf] = useState(null);
  const cepRef = useRef(null);
  const numRef = useRef(null);
  const complementoRef = useRef(null);
  const bairroRef = useRef(null);
  const cidadeRef = useRef(null);
  const logradouroRef = useRef(null);
  const ufRef = useRef(null);
  const newStyle = styles(theme);
  const dispatch = useDispatch();

  const saveUser = () => {
    dispatch(
      addUser({
        uid,
        name,
        cpf,
        rg,
        titulo,
        cnh,
        email,
      }),
    );
    dispatch(
      addAddress({
        ownerId: uid,
        id: addressId,
        cep,
        num,
        bairro,
        complemento,
        cidade,
        logradouro,
        uf,
      }),
    );
  };

  const getAddress = async () => {
    if (!cep) {
      return;
    }
    try {
      const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data) {
        setBairro(data.bairro);
        setCidade(data.localidade);
        setLogradouro(data.logradouro);
        setUf(data.uf);
        setAddressId(data.ibge);
        setComplemento(data.complemento);
      }
    } catch (error) {
      console.tron(error);
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
              Estamos quase lá..
            </H1>
            <H3 style={{textAlign: 'center', color: '#FFF', marginTop: 50}}>
              Você quer informar algum endereço?
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
                  ref={cepRef}
                  placeholderTextColor="#FFF"
                  placeholder="CEP"
                  style={{color: '#FFF'}}
                  value={cep}
                  keyboardType="numeric"
                  returnKeyType="search"
                  onSubmitEditing={() => getAddress()}
                  onChangeText={(text) => setCep(text)}
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
                  ref={numRef}
                  placeholderTextColor="#FFF"
                  placeholder="Número"
                  style={{color: '#FFF'}}
                  value={num}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => complementoRef.current._root.focus()}
                  onChangeText={(text) => setNum(text)}
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
                  ref={complementoRef}
                  placeholderTextColor="#FFF"
                  placeholder="Complemento"
                  style={{color: '#FFF'}}
                  value={complemento}
                  returnKeyType="next"
                  onSubmitEditing={() => logradouroRef.current._root.focus()}
                  onChangeText={(text) => setComplemento(text)}
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
                  ref={logradouroRef}
                  style={{color: '#FFF'}}
                  placeholder="Logradouro"
                  placeholderTextColor="#FFF"
                  value={logradouro}
                  returnKeyType="next"
                  onSubmitEditing={() => bairroRef.current._root.focus()}
                  onChangeText={(text) => setLogradouro(text)}
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
                  ref={bairroRef}
                  placeholderTextColor="#FFF"
                  placeholder="Bairro"
                  style={{color: '#FFF'}}
                  value={bairro}
                  returnKeyType="next"
                  onSubmitEditing={() => cidadeRef.current._root.focus()}
                  onChangeText={(text) => setBairro(text)}
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
                  ref={cidadeRef}
                  placeholderTextColor="#FFF"
                  placeholder="Cidade"
                  style={{color: '#FFF'}}
                  value={cidade}
                  returnKeyType="next"
                  onSubmitEditing={() => ufRef.current._root.focus()}
                  onChangeText={(text) => setCidade(text)}
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
                  ref={ufRef}
                  placeholderTextColor="#FFF"
                  placeholder="UF"
                  style={{color: '#FFF'}}
                  value={uf}
                  returnKeyType="done"
                  onSubmitEditing={() => saveUser()}
                  onChangeText={(text) => setUf(text)}
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
                  saveUser();
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

export default withTheme(StepThree);
