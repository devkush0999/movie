import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const DetailsScreen = ({ item }) => {
  const { movieId } = item.params;
  const [movie, setMovie] = useState(null);
console.log(movieId);
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const response = await axios.get(`https://api.tvmaze.com/shows/${movieId}`);
    setMovie(response.data);
  };

  if (!movie) return null;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image?.original || 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary?.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#121212' },
  image: { width: '100%', height: 300, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginVertical: 10 },
  summary: { color: '#bbb', fontSize: 16 },
});

export default DetailsScreen;
