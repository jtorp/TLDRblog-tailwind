import BlogFeed from "./BlogFeed";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts } from "../features/posts/postsSlice";

const Home = () => {


    return (<main className="content-container ">
        <BlogFeed />
    </main>
    )
};

export default Home;
