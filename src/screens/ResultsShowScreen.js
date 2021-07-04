import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  const [err, setErr] = useState('');


  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      setErr('Business Could Not Be Rendered!')
    }
  }
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <Text>{setErr}</Text>
  };

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />

        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;