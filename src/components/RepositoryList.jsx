import React from 'react'
import { FlatList, View, StyleSheet, Platform } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import Text from './Text'

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories()

  if (loading) {
    return (
      <View>
        <Text>LOADING ...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    )
  }

  if (repositories.length === 0) {
    return (
      <View>
        <Text>No repositories found.</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          ratingAverage={item.ratingAverage}
          reviewCount={item.reviewCount}
          ownerAvatarUrl={item.ownerAvatarUrl}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    height: Platform.select({
      ios: 10,
      android: 20,
    }),
  },
})

export default RepositoryList
