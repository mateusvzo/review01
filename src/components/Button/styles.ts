import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  width: ${RFValue(120)}px;
  height: ${RFPercentage(7)}px;
  border-radius: 15px;

  align-items: center;
  justify-content: center;

  margin-top: ${RFValue(10)}px;

  background-color: ${({theme}) => theme.colors.secondary};
`;
export const TextButton = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
`;