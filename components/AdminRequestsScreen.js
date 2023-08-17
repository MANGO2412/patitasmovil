import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const AdminRequestsScreen = () => {
  const [requests, setRequests] = useState([
    { id: '1', username: 'Usuario1', petName: 'Luna' },
    { id: '2', username: 'Usuario2', petName: 'Max' },
    // Agrega más solicitudes aquí
  ]);

  const handleApprove = (id) => {
    // Lógica para aprobar la solicitud con el ID dado
    // Actualizar el estado de las solicitudes después de la aprobación
  };

  const handleReject = (id) => {
    // Lógica para rechazar la solicitud con el ID dado
    // Actualizar el estado de las solicitudes después del rechazo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitudes de Adopción</Text>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.requestItem}>
            <Text>Usuario: {item.username}</Text>
            <Text>Mascota: {item.petName}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Aprobar"
                onPress={() => handleApprove(item.id)}
                color="#E1AEFF"
              />
              <Button
                title="Rechazar"
                onPress={() => handleReject(item.id)}
                color="#E1AEFF"
              />
            </View>
          </View>
        )}
      />
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
  },
  requestItem: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E1AEFF',
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default AdminRequestsScreen;
