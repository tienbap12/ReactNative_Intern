import React from 'react'

import StackNavigator from './src/navigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App
