
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainPage } from './pages/mainPage/MainPage';
import { HistoryPage } from './pages/historyPage/HistoryPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="" element={<MainPage />}/>
        <Route path='history/' element={<HistoryPage/>}/>
        <Route path="*" element={<Navigate to ="/" />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
