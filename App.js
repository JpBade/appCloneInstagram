import React, { useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Login from './src/screen/Login';
import Feed from './src/screen/Feed';


export default function App() {
  const [page, setPage] = useState(false)

  function handlePage() {
    setPage(true)
  }

  return (
    <View>{page ? <Feed /> : <Login handlePage={handlePage} />}</View>
  )
}