import React, { useState, useEffect } from 'react';
import { View, Text, Picker, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const VaccineApplicationForm = () => {
  const [vacuna_id, setVacunaId] = useState('');
  const [vaccines, setVaccines] = useState([]);
  
  useEffect(() => {
    // Obtener datos de la API de vacunas usando Axios
    axios.get('https://terra-ogo9.onrender.com/vacuna/')
      .then(response => {
        setVaccines(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de vacunas:', error);
      });
  }, []);

  const handleVaccineChange = (value) => {
    setVacunaId(value);
  };

  const handleApplyVaccine = () => {
    // Lógica para enviar los datos del formulario a la API
    const formData = { vacuna_id };
    
    axios.post('URL_DE_TU_API_PARA_APLICAR_VACUNA', formData)
      .then(response => {
        console.log('Respuesta de la API:', response.data);
        // Restablecer el formulario
        setVacunaId('');
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Aplicación de Vacuna a Perro</Text>
      <Picker
        selectedValue={vacuna_id}
        onValueChange={handleVaccineChange}
      >
        <Picker.Item label="Selecciona una vacuna..." value="" />
        {vaccines.map(vaccine => (
          <Picker.Item key={vaccine.id} label={vaccine.name} value={vaccine.id} />
        ))}
      </Picker>
      <Button title="Aplicar Vacuna" onPress={handleApplyVaccine} color="#FFC4E1" />
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
});

export default VaccineApplicationForm;
