import Header from "./components/Header";
import Layout from "./components/Layout";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
function App (){
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element ={ <Post />} />
                <Route path={'login'} element={<div>login page</div>}/>

                <Route path={'register'} element={<div>login page</div>}/>
            </Route>
        </Routes>
        
      
    )
}

export default App;  