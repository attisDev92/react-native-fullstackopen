//import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  //const [repositories, setRepositories] = useState()
  //const [loading, setLoading] = useState(false)

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })

  const repositoriesNodes =
    data && data.repositories ? data.repositories.edges.map((edge) => edge.node) : []

  // const fetchRepositories = async () => {
  //   const response = await fetch('http://10.0.10.191:5001/api/repositories')
  //   const json = await response.json()
  //   setRepositories(json.edges.map((edge) => edge.node))
  // }

  // useEffect(() => {
  //   fetchRepositories()
  // }, [])

  return {
    repositories: repositoriesNodes,
    loading,
    error,
  }
}

export default useRepositories
