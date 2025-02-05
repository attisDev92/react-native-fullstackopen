import { Formik } from 'formik'
import { Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'
import Constants from 'expo-constants'
import FormilTextInput from './FormikTextInpu'
import theme from '../styles/theme'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(10).required(),
  password: yup.string().min(5).max(10).required(),
})

const SignIn = ({ onSubmit }) => {
  return (
    <View style={styles.formInputsContainer}>
      <Text>SignIn</Text>
      <FormilTextInput name="username" placeholder="usuario" />
      <FormilTextInput name="password" placeholder="contraseña" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text>SigIn</Text>
      </Pressable>
    </View>
  )
}

const SignInForm = () => {
  const { signIn } = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    paddingBlockStart: Constants.statusBarHeight,
    backgroundColor: '#fff',
    height: '100%',
  },
  formInputsContainer: {
    gap: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    color: '#fff',
    backgroundColor: theme.colors.primary,
    padding: 5,
  },
})

export default SignInForm
