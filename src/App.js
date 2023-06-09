import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./compo/Navbar";
import Home from './compo/Home';
import Foot from "./compo/Foot";
import About from "./compo/About";
import Post from './compo/Post';
import Blog from './compo/Blog';

function App() {
  return (
    <>
 <Navbar />
    <Routes basename="/React-Blog">
      <Route exact  path={process.env.PUBLIC_URL + '/'} element={<Home />} />
      <Route path='React-Blog/About' element={<About/>} />
      <Route path='Blog' element={<Blog/>} />
      <Route path='Post/:postId' element={<Post />} />
    </Routes>
  <Foot />
    </>
    );
}

export default App;
