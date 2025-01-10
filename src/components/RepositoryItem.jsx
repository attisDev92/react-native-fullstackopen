import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../styles/theme'

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  const decimalTransformation = (number) => {
    if (number < 1000) return number

    return `${(number / 1000).toFixed(1)} k`
  }

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={{ width: 50, height: 50 }} />
        <View style={styles.description}>
          <Text fontSize={'subheading'} fontWeight={'bold'}>
            {fullName}
          </Text>
          <Text fontSize={'subheading'}>{description}</Text>
          <View style={styles.language}>
            <Text style={{ color: '#fff' }}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.rating}>
          <Text fontWeight={'bold'}>{decimalTransformation(stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.rating}>
          <Text fontWeight={'bold'}>{decimalTransformation(forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.rating}>
          <Text fontWeight={'bold'}>{decimalTransformation(reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.rating}>
          <Text fontWeight={'bold'}>{decimalTransformation(ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    gap: 10,
    backgroundColor: theme.backgroundColor.light,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    flex: 1,
    gap: 10,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingInline: 10,
    paddingBlock: 7,
    width: 'auto',
    alignSelf: 'flex-start',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
})

export default RepositoryItem
