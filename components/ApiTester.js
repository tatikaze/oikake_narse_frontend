import React, { useState } from "react";
import { StyleSheet } from "react-native";
import axios from "axios";
import { Button, Text, View, Header, Body, Title } from "native-base";

import QlItem from './QlItem.js';
import GraphqlHeader from './GraphqlHeader.js';

export default () => {
  const [contents, setContents] = useState([]);
  
  const pp = ["id", "author", "title"];
  const schema = `{
    posts { 
    ${pp.join("\n")} 
    }
  }`
  console.log(schema)
  const getData = () => {
    let url = 'http://tatikaze.com:4000/graphql?query='
    axios.get(url + encodeURIComponent(schema))
    .then(result => setContents(result.data.data.posts))
    .then(console.log(contents))
  }

  return (
    <View style={styles.contaier}>
      <GraphqlHeader />
      <Button
        onPress={() => 
          getData()
        }
      ><Text>aaa</Text></Button>
      {contents.map((data) => {
        return <QlItem key={data.id} data={data}/>
      })}
      <Button
        onPress={() => 

        }
        title="delete"
      />
    </View>
  );
}

const styles = StyleSheet.create({
});
