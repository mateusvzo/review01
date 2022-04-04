import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 width: 100%;
 padding: 0 10px;
`;
export const InputStyle = styled.TextInput`
 width: 100%;
 height: ${RFValue(50)}px;

 padding: ${RFValue(10)}px;
 margin-top: ${RFValue(5)}px;
 font-size: ${RFValue(14)}px;

 border-radius: 10px;
 background-color: ${({theme}) => theme.colors.shape};
`;