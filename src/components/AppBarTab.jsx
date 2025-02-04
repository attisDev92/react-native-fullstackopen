import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native' // Usamos useNavigate para navegar

const AppBarTab = ({ textTab, route, onPress }) => {
  const navigate = useNavigate()

  // Si no hay una función onPress proporcionada, usamos la ruta para navegar
  const handlePress = () => {
    if (onPress) {
      onPress() // Si hay un onPress, lo ejecutamos (para Sign Out)
    } else if (route) {
      navigate(route) // Si no hay onPress, usamos la ruta para navegar
    }
  }

  return (
    <Pressable onPress={handlePress} style={styles.tab}>
      <Text style={styles.tabText}>{textTab}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default AppBarTab
