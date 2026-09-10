import { Suspense, useState } from 'react'
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
const [coin, setCoin] = useState(5000000000);

  return (
    <>
      <Nav coin= {coin}></Nav>
      <Banner></Banner>
      <Suspense fallback = {<h2>Loading......</h2>}>
        <Players coin= {coin} setCoin= {setCoin} playersPromise = {playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
