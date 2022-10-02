
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainPage } from './pages/mainPage/MainPage';
import { HistoryPage } from './pages/historyPage/HistoryPage';
import BelltowerPage from './pages/belltowerPage/BelltowerPage';
import ProsphoricPage from './pages/prosphoricPage/ProsphoricPage';
import SchedulePage from './pages/schedulePage/SchedulePage';
import LibraryPage from './pages/libraryPage/LibraryPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import PoorhousePage from './pages/poorhousePage/PoorhousePage';
import MercyBusPage from './pages/mercyBusPage/MersyBusPage';
import SundaySchoolPage from './pages/sundaySchoolPage/SundaySchoolPage';
import PhotogalleryPage from './pages/photogalleryPage/PhotogalleryPage';
import {React} from 'react'

import { BelltowerGallery, MersybusGallery, PoorhouserGallery, TempleGallery } from './pages/photogallerypages/PhotogalleryPages';
import { DonationsPage } from './pages/donationsPage/DonationsPage';

function App() {
  return (

    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage />}/>

        <Route path='/history' element={<HistoryPage/>}/>
        <Route path='/belltower' element={<BelltowerPage/>}/>
        <Route path='/library' element={<LibraryPage/>}/>
        <Route path='/prosphoric' element={<ProsphoricPage/>}/>
        <Route path='/sundayschool' element={<SundaySchoolPage/>}/>
        
        <Route path='/schedule' element={<SchedulePage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        <Route path='/poorhouse' element={<PoorhousePage/>}/>
        <Route path='/mercybus' element={<MercyBusPage/>}/>
        <Route path='/photogallery' element={<PhotogalleryPage/>}/>
        <Route path='/donations' element={<DonationsPage/>}/>

        <Route path='/photogallery/temple' element={<TempleGallery/>}/>
        <Route path='/photogallery/belltower' element={<BelltowerGallery/>}/>
        <Route path='/photogallery/poorhouse' element={<PoorhouserGallery/>}/>
        <Route path='/photogallery/mersybus' element={<MersybusGallery/>}/>

        <Route path="*" element={<Navigate to ="/" />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
