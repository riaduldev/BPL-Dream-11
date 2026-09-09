import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/nav'
import Players from './Components/Players/Players'
import type { IPlayer } from './Types/PlayerType'

const playersPromise = async ():Promise<IPlayer[]> => {
  const res = await fetch("/data.json")
  const data = await res.json();
  return data
}




function App() {
// const playersPromise = playersFetch();


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback = {<h2>Loading......</h2>}>
        <Players playersPromise = {playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
