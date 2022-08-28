
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
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path='/history' element={<HistoryPage/>}/>
        <Route path='/belltower' element={<BelltowerPage/>}/>
        <Route path='/prosphoric' element={<ProsphoricPage/>}/>
        <Route path='/schedule' element={<SchedulePage/>}/>
        <Route path='/library' element={<LibraryPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        <Route path='/poorhouse' element={<PoorhousePage/>}/>
        <Route path='/mercybus' element={<MercyBusPage/>}/>
        <Route path='/sundayschool' element={<SundaySchoolPage/>}/>
        <Route path="*" element={<Navigate to ="/" />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
