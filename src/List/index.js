import React from 'react';
import {View, Text,StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props){
  function carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : 
    require('../img/like.png')
  }

  function mostraLikes(likers){
    if(likers === 0){
      return;
    }

    return(
      <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'} </Text>
    )
  }
  return(
    <View>
      <View style={styles.viewPerfil}>
        <Image
        source={props.data.imgperfil}
        style={styles.fotoPerfil}
        />

        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image
      resizeMode="cover" 
      source={props.data.imgPublicacao}
      style={styles.fotoPublicacao}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
          source={carregaIcone(props.data.likeada)}
          style={styles.iconelike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
          source={require('../img/comment.png')}
          style={styles.iconelike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
          source={require('../img/send.png')}
          style={styles.iconelike}
          />
        </TouchableOpacity>
      </View>

      {mostraLikes(props.data.likers)}
      
      <Text style={styles.nomeRodape}>
        {props.data.nome}
      </Text>

      <Text style={styles.descRodape}>
        {props.data.descricao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil:{
    flexDirection:'row',
    flex:1,
    alignItems: 'flex-start',
    padding:8,
  },
  fotoPerfil:{
    width:40,
    height:40,
    borderRadius:25,
  },
  nomeUsuario:{
    paddingLeft: 5,
    fontSize: 16,
    color: 'black'
  },
  fotoPublicacao:{
    height:400,
    alignItems:'center'

  },
  areaBtn:{
    flexDirection:'row',
    padding: 5,

  },
  iconelike:{
    width:25,
    height:25,
  },
  btnSend:{
    paddingLeft:7,
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:5,
  },
  descRodape:{
    paddingLeft:5,
    paddingBottom:10,
    fontsize: 5,
  },
})