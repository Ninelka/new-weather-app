import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import TodayWeather from './components/TodayWeather'
import WeekWeather from './components/WeekWeather'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <TodayWeather/>
        <WeekWeather/>
      </>
    </ApolloProvider>
  );
}

export default App;
