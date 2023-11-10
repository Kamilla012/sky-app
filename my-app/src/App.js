import Header from "./components/Header";
import Layout from "./components/Layout";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import SatellitesSearch from './components/SatellitesSearch'
import StarsChart from "./components/StarsChart";
import Home from "./pages/Home";
function App (){

    return(
        

        <Routes>
                <Route path="/" element={<Layout />}>
                <Route path='/' element={<Home />} />
                {/* <Route index element={<Header />} />    */}
                {/* <Route index element ={ <IndexPage />} /> */}
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path='/blog' element={<IndexPage showAllPosts={true} />} />

                <Route path={'/register'} element={<RegisterPage />}/>
                <Route path={"/create"} element={<CreatePost />} />
                <Route path={'/post/:id'} element={<PostPage/>} />
                <Route path="/satellites" element={<SatellitesSearch />} />
                <Route path={"/starsCharts"} element={<StarsChart />} />
                


{/*                
                <Route path="/" element={<SatellitesSearch /> } /> */}
            </Route>
                
        </Routes>
     
      
    )
}

export default App;  