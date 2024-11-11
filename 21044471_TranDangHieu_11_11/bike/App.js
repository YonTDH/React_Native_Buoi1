import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>POWER BIKE SHOP</Text>
      <Image
        source={{ uri: 'https://xedapgiakho.com/wp-content/uploads/2020/08/Xe-%C4%91%E1%BA%A1p-th%E1%BB%83-thao-%C4%91%E1%BB%8Ba-h%C3%ACnh-Fornix-FC27.jpg' }}
        style={styles.imageLarge}
      />
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('BikeList')}
        color="#f04d4d"
      />
    </View>
  );
};

// Bike List Screen
const BikeListScreen = ({ navigation }) => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('https://6731c4d57aaf2a9aff11f53e.mockapi.io/bike')
      .then(response => response.json())
      .then(data => setBikes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BikeDetails', { bike: item })}>
            <View style={styles.bikeCard}>
              <Image
                source={{ uri: item.image || 'https://xedapgiakho.com/wp-content/uploads/2020/08/Xe-%C4%91%E1%BA%A1p-th%E1%BB%83-thao-%C4%91%E1%BB%8Ba-h%C3%ACnh-Fornix-FC27.jpg' }}
                style={styles.imageSmall}
              />
              <Text style={styles.bikeTitle}>{item.name}</Text>
              <Text style={styles.bikePrice}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Bike Details Screen
const BikeDetailsScreen = ({ route }) => {
  const { bike } = route.params;

  return (
    <View style={styles.centered}>
      <Image source={{ uri: bike.image || 'https://xedapgiakho.com/wp-content/uploads/2020/08/Xe-%C4%91%E1%BA%A1p-th%E1%BB%83-thao-%C4%91%E1%BB%8Ba-h%C3%ACnh-Fornix-FC27.jpg' }} style={styles.imageLarge} />
      <Text style={styles.title}>{bike.name || "Pina Mountain"}</Text>
      <Text style={styles.discount}>15% OFF</Text>
      <Text style={styles.originalPrice}>$1350</Text>
      <Text style={styles.bikePrice}>${bike.price || 449}</Text>
      <Text style={styles.description}>{bike.description || "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc."}</Text>
      <Button title="Add to Cart" onPress={() => alert('Added to cart')} color="#f04d4d" />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BikeList" component={BikeListScreen} />
        <Stack.Screen name="BikeDetails" component={BikeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imageLarge: {
    width: 300,
    height: 200,
    marginVertical: 20,
  },
  imageSmall: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  bikeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  bikeTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  discount: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  bikePrice: {
    fontSize: 24,
    color: '#f04d4d',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
});

