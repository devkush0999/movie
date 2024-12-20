import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from '@/components/MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
// import {
//   useNavigation,
// } from '@react-navigation/native';

const Search = ({ navigation }) => {
    const navigateToDetails = (movieId) => {
        navigation.navigate('DetailsScreen', { movieId: item.show.id  });
      };
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    if (!query) return;

    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    setResults(response.data);

  };
   console.log(results);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Type to search..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchMovies}
      />
      
      <FlatList
        data={results}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <Link href='./../[movieId]' >
          <MovieCard
            movie={item.show}
            // onPress= {navigateToDetails }
            
          /></Link>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  searchBar: { height: 40, margin: 10, borderRadius: 5, paddingHorizontal: 10, backgroundColor: '#333', color: '#fff' },
});

export default Search;
