import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import { useState } from 'react'
import PostListProvider from './Store/posts-list-store'
function App() {

  const [selectedTab, setSelectedtab] = useState("Home");


  return (

    <PostListProvider>
      <div className='app-conatiner'>
        <Sidebar selectedTab={selectedTab} setSelectedtab={setSelectedtab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? <PostList></PostList> : <CreatePost ></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>

  )
}

export default App
