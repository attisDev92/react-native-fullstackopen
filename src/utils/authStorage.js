import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY_ACCESS_TOKEN = 'accessToken'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  constructKey(key) {
    return `${this.namespace}:${key}`
  }

  getAccessToken() {
    return AsyncStorage.getItem(this.constructKey(KEY_ACCESS_TOKEN))
  }

  setAccessToken(accessToken) {
    return AsyncStorage.setItem(this.constructKey(KEY_ACCESS_TOKEN), accessToken)
  }

  removeAccessToken() {
    return AsyncStorage.removeItem(this.constructKey(KEY_ACCESS_TOKEN))
  }
}

export default AuthStorage
