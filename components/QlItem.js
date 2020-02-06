import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';


export default (props) => {
  return (
    <View>
      <Text>{props.data.id} {props.data.title}</Text>
      <Text style={styles.author}>{props.data.author}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title : {
    fontSize: 30,
  },
  id : {
    color: 'rgba(255,255,255,0.5)',
  },
  author : {
    fontSize: 10,
    color: 'rgba(20,20,20,0.5)',
  }
})
