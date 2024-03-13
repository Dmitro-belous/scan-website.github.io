import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './components/main_page/MainPage';
import AuthPage from './components/auth_page/AuthPage';
import SearchPage from './components/search_page/SearchPage';
import ResultsPage from './components/results_page/ResultsPage';
import Layout from './components/layout/Layout';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage/>}></Route>
          <Route path="account" element={<AuthPage/>}></Route>
          <Route path="search" element={<SearchPage/>}></Route>
          <Route path="results" element={<ResultsPage/>}></Route>        
        </Route>    
        <Route path="*" element={<NotFoundPage/>}></Route>   
      </Routes>
    </div>
  );
}

export default App;
