// screens/MenuScreen.js
import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { useMenu } from '../contexts/MenuContext';  // Import the context

const MenuScreen = () => {
  const { menuItems, filteredItems, setFilteredItems } = useMenu();  // Access context values

  // Function to handle filtering by course
  const handleFilter = (course) => {
    if (course === 'All') {
      setFilteredItems(menuItems);  // Show all items
    } else {
      setFilteredItems(menuItems.filter(item => item.course === course));  // Filter by course
    }
  };

  // FlatList render item (for each dish in a course)
  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.dishImage} />
      <View style={styles.dishDetails}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.dishDescription}>{item.description}</Text>
        <Text style={styles.dishPrice}>Price: R{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <Button title="Starters" onPress={() => handleFilter('Starters')} color="#4A90E2" />
        <Button title="Mains" onPress={() => handleFilter('Mains')} color="#4A90E2" />
        <Button title="Desserts" onPress={() => handleFilter('Desserts')} color="#4A90E2" />
        <Button title="All" onPress={() => handleFilter('All')} color="#4A90E2" />
      </View>

      {/* Menu items list - render filteredItems */}
      <FlatList
        data={filteredItems}  // Use filteredItems to display the menu
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // White background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#4A90E2', // Blue color for title
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  dishDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default MenuScreen;

