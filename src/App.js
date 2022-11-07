import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import EditPost from "./components/EditPost";
import Missing from "./components/Missing";
import Tags from "./components/Tags";
import AuthorList from "./components/AuthorList";
import AuthorPage from "./components/AuthorPage";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PrivateOutlet from "./components/Auth/PrivateOutlet"
import Welcome from "./components/Auth/Welcome";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Missing />} />
        <Route path="coming-soon" element={<UnderConstruction />} />

        <Route path='author'>
          <Route index element={<AuthorList />} />
          <Route path=":userId" element={<AuthorPage />} />
        </Route>

        <Route path="post">
          <Route path=":id" element={<PostPage />} />
        </Route>

        {/* private */}
        <Route path="post" element={<PrivateOutlet />}>
          <Route index element={<NewPost />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path=":id" element={<PostPage />} />
          <Route path="edit/:id" element={<EditPost />} />
        </Route>



      </Route>
    </Routes>

  );
}

export default App;
