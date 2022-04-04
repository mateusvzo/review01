import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container ,ButtonOpacity, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
 title: string;
}

export function Button({ title, ...rest }: ButtonProps){
 return(
  <Container>
   <ButtonOpacity
   {...rest}
   activeOpacity={0.7}
   >
    <TextButton>{title}</TextButton>
   </ButtonOpacity>
  </Container>
 )
}