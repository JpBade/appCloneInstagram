
import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Grid from './src/screens/Grid';
import Login from './src/screens/Login';


export default function App() {

  const [page, setPage] = useState(false)

  function handlePage() {
    setPage(true)
  }

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle='dark-content' />
      {page ? <Grid /> : <Login handlePage={handlePage} />}
    </>
  )
}

/* 
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Grid from './src/screens/Grid';
import Login from './src/screens/Login';


export default function App() {

  return (

      <Login/>

  )
} */
