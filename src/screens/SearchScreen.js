import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchAPI, results, errMessage] = useResults();

  const filterResults = (price) => {
    //price = $ || $$ || $$$
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <ScrollView>
        <ResultsList

          results={filterResults('$')}
          title='Cost Effective' />
        <ResultsList

          results={filterResults('$$')}
          title='Bit Pricey' />
        <ResultsList

          results={filterResults('$$$')}
          title='Hella Expensive' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
