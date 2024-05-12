
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import News from './Components/Navbar/Header/News';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const apikey=process.env.REACT_APP_NEWS_API
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route exact path='/'element={<News  apikey={apikey} key="general" pageSize={5} country="in" category="general"/>}/>
       <Route exact path='/business' element={<News  apikey={apikey} key="business" pageSize={5} country="in" category="business"/>}/>
       <Route exact path='/sports' element={<News  apikey={apikey} key="sports" pageSize={5} country="in" category="sports"/>}></Route>
       <Route exact path='/entertainment' element={<News  apikey={apikey} key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route>
       <Route exact path='/science' element={<News  apikey={apikey} key="science" pageSize={5} country="in" category="science"/>}></Route>
       <Route exact path='/health' element={<News  apikey={apikey} key="health" pageSize={5} country="in" category="health"/>}></Route>
       <Route exact path='/technology'element={<News  apikey={apikey} key="technology" pageSize={5} country="in" category="technology"/>}></Route>
       <Route exact path='/politics'element={<News  apikey={apikey} key="politics" pageSize={5} country="in" category="politics"/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
