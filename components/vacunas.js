import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VaccineForm = () => {
  const [vaccineData, setVaccineData] = useState({
    id: '',
    name: '',
    description: '',
  });

  const handleInputChange = (key, value) => {
    setVaccineData({ ...vaccineData, [key]: value });
  };

  const handleSubmit = () => {
    // Lógica para enviar los datos del formulario
    console.log('Datos enviados:', vaccineData);
    // Restablecer el formulario
    setVaccineData({name: '', description: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Vacuna</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Vacuna"
        value={vaccineData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de Vacuna"
        value={vaccineData.description}
        onChangeText={(text) => handleInputChange('description', text)}
        multiline
      />
      <Button title="Guardar" onPress={handleSubmit} color="#FFC4E1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFC4E1',
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFC4E1',
    borderRadius: 8,
  },
});

export default VaccineForm;
