import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(20)}px;

  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.shape};

  font-size: ${RFValue(20)}px;
`;