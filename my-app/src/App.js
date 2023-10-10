import Header from "./components/Header";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
function App (){
    return(
        <Routes>
            <Route index element ={
                <main className="px-8 py-6 bg-primary">
                    <Header />
                      <Post />
                      <Post />
                      <Post />
                </main>
            } />
        </Routes>
      
    )
}

export default App;  