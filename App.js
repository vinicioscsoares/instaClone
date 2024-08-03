import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from './src/Header'
import List from './src/List'

export default function App(){

  const[feed,setFeed] = useState([
    {
      id:'1',
      nome: 'Fulano da Silva2',
      imgperfil: require('./src/perfil/img1.jpg'),
      imgPublicacao: require('./src/perfil/img1.jpg'),
      descricao: 'descricao1',
      likeada: true,
      likers:40
    },
    {
      id:'2',
      nome: 'Fulano da Silva3',
      imgperfil: require('./src/perfil/img2.jpg'),
      imgPublicacao: require('./src/perfil/img1.jpg'),
      descricao: 'descricao5',
      likeada: true,
      likers:0
    },
    {
      id:'3',
      nome: 'Fulano da Silva4',
      imgperfil: require('./src/perfil/img1.jpg'),
      imgPublicacao: require('./src/perfil/img1.jpg'),
      descricao: 'descricao6',
      likeada: true,
      likers:20
    },
    {
      id:'4',
      nome: 'Fulano da Silva5',
      imgperfil: require('./src/perfil/img2.jpg'),
      imgPublicacao: require('./src/perfil/img1.jpg'),
      descricao: 'descricao4',
      likeada: true,
      likers:4
    },
    {
      id:'5',
      nome: 'Fulano da Silva6',
      imgperfil: require('./src/perfil/img3.jpg'),
      imgPublicacao: require('./src/perfil/img1.jpg'),
      descricao: 'descricao3',
      likeada: true,
      likers:3
    },
    {
      id:'6',
      nome: 'Fulano da Silva7',
      imgperfil: require('./src/perfil/img5.png'),
      imgPublicacao: require('./src/perfil/img1.jpg'),
      descricao: 'descricao2',
      likeada: true,
      likers:50
    },
  ])

  return (
    <View style={StyleSheet.container}>
      <Header/>

      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={feed}
      renderItem={({ item }) => <List data={item} />}
      />

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
  }
})