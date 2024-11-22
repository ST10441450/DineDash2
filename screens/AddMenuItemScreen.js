// screens/AddMenuItemScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../contexts/MenuContext'; // Import context

const AddMenuItemScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');
  const { menuItems, addMenuItem, removeMenuItem, role } = useMenu(); // Get menu items and role from context

  // Function to add a new menu item
  const handleAddItem = () => {
    if (name && description && price) {
      const newItem = { id: Date.now(), name, description, course, price };
      addMenuItem(newItem); // Add the item to the menu
      navigation.goBack(); // Navigate back after adding
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Effect to log the menu items when the component mounts (for debugging)
  useEffect(() => {
    console.log(menuItems); // You can remove this in production
  }, [menuItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>

      {/* Form for adding a new item */}
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholder="Enter description"
      />

      <Text style={styles.label}>Course</Text>
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <Text style={styles.label}>Price</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter price"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>

      {/* Displaying the menu items list */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>ZAR {item.price}</Text>

            {/* Show remove button only for chefs */}
            {role === 'chef' && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeMenuItem(item.id)}
              >
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
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
    color: '#4A90E2', // Blue color for title
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#333', // Dark grey for label text
    marginBottom: 10,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#FFB81C', // Yellow color for button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2', // Blue color for item names
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddMenuItemScreen;

