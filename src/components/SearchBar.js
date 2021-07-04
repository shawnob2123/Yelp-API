import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.searchIcon} color="black" />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder='Search'
        style={styles.inputStyle}

      />
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10

  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center'
  },
  inputStyle: {
    flex: 1,
    marginHorizontal: 15,
    fontSize: 18
  }
});

export default SearchBar;
