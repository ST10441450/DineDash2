// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Bruschetta', price: 50, course: 'Starters' },
    { id: 2, name: 'Greek Salad', price: 60, course: 'Starters' },
    { id: 3, name: 'Soup of the Day', price: 45, course: 'Starters' },
    { id: 4, name: 'Grilled Steak', price: 150, course: 'Mains' },
    { id: 5, name: 'Margherita Pizza', price: 120, course: 'Mains' },
    { id: 6, name: 'Grilled Salmon', price: 170, course: 'Mains' },
    { id: 7, name: 'Chocolate Lava Cake', price: 80, course: 'Desserts' },
    { id: 8, name: 'Tiramisu', price: 85, course: 'Desserts' },
  ]);

  // Calculate average price per course
  const calculateAveragePrice = (course) => {
    const filteredItems = menuItems.filter((item) => item.course === course);
    if (filteredItems.length === 0) return 0;
    const totalPrice = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return (totalPrice / filteredItems.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DineDash</Text>

      <View style={styles.averageContainer}>
        <Text style={styles.averageText}>Starters: ZAR {calculateAveragePrice('Starters')}</Text>
        <Text style={styles.averageText}>Mains: ZAR {calculateAveragePrice('Mains')}</Text>
        <Text style={styles.averageText}>Desserts: ZAR {calculateAveragePrice('Desserts')}</Text>
      </View>

      {/* Navigate to Menu Screen */}
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
        color="#4A90E2" // Blue color for the button
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2', // Blue color for the title
    marginBottom: 20,
    textAlign: 'center',
  },
  averageContainer: {
    marginTop: 30,
  },
  averageText: {
    fontSize: 18,
    color: '#333', // Dark grey color for text
    marginVertical: 10,
  },
});

export default HomeScreen;

