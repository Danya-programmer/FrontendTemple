
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
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path='/history/' element={<HistoryPage/>}/>
        <Route path='/belltower/' element={<BelltowerPage/>}/>
        <Route path='/prosphoric/' element={<ProsphoricPage/>}/>
        <Route path='/schedule/' element={<SchedulePage/>}/>
        <Route path='/library/' element={<LibraryPage/>}/>
        <Route path="*" element={<Navigate to ="/" />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
