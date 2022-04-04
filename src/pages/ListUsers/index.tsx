import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header } from "../../components/Header";
import { Container } from "./styles";
import { ListUser } from "../../components/ListUser";

interface ListUsersProps {
  id: string;
  name: string;
  cpf: string;
  email: string;
}

export function ListUsers(){
  const [users, setUsers] = useState<ListUsersProps[]>([]);

  async function loadUsers() {
    const storagedUsers = await AsyncStorage.getItem('@si7op:users')
    if(storagedUsers) {
      setUsers(JSON.parse(storagedUsers))
    }
  }

  function removeUser(id: string){
    setUsers(users => users.filter(user => user.id !== id))
  }

  useEffect(() => {
    loadUsers();
  }, [])

  useEffect(() => {
    async function saveData(){
      await AsyncStorage.setItem('@si7op:users', JSON.stringify(users))
    }
    saveData();
  }, [users])

  return (
    <Container>
      <Header title="Listagem de Usuários"/>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListUser 
            item={item}
            onPress={() => removeUser(item.id)}
          />
          // <TouchableOpacity>
          //   <Text>{item.id}</Text>
          //   <Text>{item.name}</Text>
          //   <Text>{item.cpf}</Text>
          //   <Text>{item.email}</Text>
          // </TouchableOpacity>
        )}
      />
    </Container>
 )
}