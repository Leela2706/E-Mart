import React from 'react'
import "./App.css"
import LandingPage from './Stores/Pages/LandingPage'
import { Routes, Route } from "react-router-dom"
import Kitchen from './Stores/Components/Kitchen'
import MobilesPage from './Stores/Pages/MobilesPage'
import AcPage from './Stores/Pages/AcPage'
import Navbar from './Stores/Components/Navbar'
import WatchesPage from './Stores/Pages/WatchesPage'
import SpeakerPage from './Stores/Pages/SpeakerPage'
import BooksPage from './Stores/Pages/BooksPage'
import ComputerPage from './Stores/Pages/ComputerPage'
import FridgePage from './Stores/Pages/FridgePage'
import TvPage from './Stores/Pages/TvPage'
import ManPage from './Stores/Pages/ManPage'
import WomenPage from './Stores/Pages/WomenPage'
import FurniturePage from './Stores/Pages/FurniturePage'
import KitchenPage from './Stores/Pages/KitchenPage'
import MobileSingle from './Stores/Singles/MobileSingle'
import UserCart from './Stores/userCart'
import AcSingle from './Stores/Singles/AcSingle'
import ComputerSingle from './Stores/Singles/ComputerSingle'
import FurnitureSingle from './Stores/Singles/FurnitureSingle'
import KitchenSingle from './Stores/Singles/Kitchen'
import MenSingle from './Stores/Singles/MensSingle'
import WatchSingle from './Stores/Singles/WatchSingles'
import WomanSingle from './Stores/Singles/WomensSingle'
import FridgeSingle from './Stores/Singles/FridgeSingle'


const App = () => {
  return (
    <div>


      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element={<MobilesPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path="/watch" element={<WatchesPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/speaker' element={<SpeakerPage />} />
        <Route path='/computer' element={<ComputerPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/tV' element={<TvPage />} />
        <Route path="/men" element={<ManPage />} />
        <Route path='women' element={<WomenPage />} />
        <Route path='furniture' element={<FurniturePage />} />
        <Route path='kitchen' element={<KitchenPage />} />

        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/cart' element={<UserCart />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/computer/:id' element={<ComputerSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/watch/:id' element={<WatchSingle />} />
        <Route path='/woman/:id' element={<WomanSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
      </Routes>
    </div>
  )
}

export default App
