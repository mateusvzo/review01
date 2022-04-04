import { TouchableOpacityProps } from "react-native";
import { ButtonCard, Container, TextCard } from "./styles";

interface ListUserProps extends TouchableOpacityProps{
 item: Object;
}

export function ListUser({item, ...rest}: ListUserProps){
 return (
  <Container>
   <ButtonCard
    {...rest}
   >
    {Object.values(item).map((data, index) => (
     <TextCard key={index}>
      {index > 0 && data}
     </TextCard>
    ))}
   </ButtonCard>
  </Container>
 )
}