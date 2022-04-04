import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";
import {Alert, FlatList} from 'react-native';
  
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
  
import { Container } from "./styles";

// interface CadastroProps {
//   name: string;
//   cpf: string;
//   email: string;
// }

export function Dashboard() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  // const [cadastro, setCadastro] = useState<CadastroProps[]>([]);

  // useEffect(() => {
  //   async function saveData(){
  //     await AsyncStorage.setItem('@listRegister', JSON.stringify(cadastro))
  //   }
  //   saveData();
  // }, [cadastro])

  // useEffect(() => {
  //   async function loadData() {
  //     const getData = await AsyncStorage.getItem('@listRegister')
  //     return getData !== null ? setCadastro(JSON.parse(getData)) : null;
  //   }

  //   loadData();
  // }, [])

  async function handleAddRegister() {
    const user = {
      id: String(new Date().getTime()),
      name,
      cpf,
      email,
    }

    try {
      const data = await AsyncStorage.getItem('@si7op:users')
      const currentData = data ? JSON.parse(data) : []
      const dataFormatted = [
        ...currentData,
        user
      ]
      await AsyncStorage.setItem('@si7op:users', JSON.stringify(dataFormatted))

    } catch(err) {
      console.log(err)
      Alert.alert('Não foi possivel gravar o usuário')
    }
    setName('');
    setCpf('');
    setEmail('');
  }

  async function loadData() {
    const data = await AsyncStorage.getItem('@si7op:users')
    const currentData = data ? JSON.parse(data) : []
    console.log(currentData)
  }

  async function clearDataUser() {
    await AsyncStorage.clear()
  }

  useEffect(() => {
    loadData();
    // clearDataUser()
  }, [])

  return (
    <Container>
      <Header title="Cadastro de Usuários"/>
      <Input 
        placeholder="Digite seu Nome"
        value={name}
        onChangeText={value => setName(value)}
      />

      <Input 
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={value => setCpf(value)}
      />

      <Input 
        placeholder="Digite seu Email"
        value={email}
        onChangeText={value => setEmail(value)}
      />

      <Button 
        title="Cadastrar"
        onPress={handleAddRegister}
      />
      {/* <Button 
        title="Lista"
      /> */}
    </Container>
  );
}
