import {StyleSheet} from 'react-native';
// import styled from 'styled-components/native';
// import * as nativeBase from 'native-base';

// export const Container = styled.ImageBackground`
//   flex: 1;
//   padding: 20px;
// `;

// export const Welcome = styled.Text`
//   align-self: center;
//   font-size: ${(props) => props.theme.fontSizes.bigger};
//   color: ${(props) => props.theme.colors.textColor};
//   font-weight: 500;
// `;

// export const Info = styled.Text`
//   padding-top: 10px;
//   padding-bottom: 10px;
//   align-self: center;
//   text-align: center;
//   font-size: ${(props) => props.theme.fontSizes.large};
//   color: ${(props) => props.theme.colors.textColor};
//   font-weight: 500;
// `;

// export const Label = styled(nativeBase.Label)`
//   color: ${(props) => props.theme.colors.textColor};
//   font-size: ${(props) => props.theme.fontSizes.small};
// `;

// export const Input = styled(nativeBase.Input)`
//   color: ${(props) => props.theme.colors.textColor};
//   font-size: ${(props) => props.theme.fontSizes.small};
// `;

const styles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      // paddingVertical: 20,
      // alignItems: 'center',
    },
    welcome: {
      alignSelf: 'center',
      fontSize: theme.fontSizes.bigger,
      color: theme.colors.textColor,
      fontWeight: '500',
      marginVertical: 50,
    },
    info: {
      textAlign: 'center',
      fontSize: theme.fontSizes.large * 1.1,
      color: theme.colors.textColor,
      fontWeight: '500',
    },
    text: {
      color: theme.colors.textColor,
      fontSize: theme.fontSizes.medium,
    },
    item: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginVertical: 10,
    },
  });
};

export default styles;
