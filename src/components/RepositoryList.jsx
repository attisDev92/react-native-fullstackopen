import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { repositories } from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
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
    height: 10,
  },
})

export default RepositoryList
