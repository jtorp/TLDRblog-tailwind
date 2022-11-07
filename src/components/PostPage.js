import Tag from "./Tag";
import { TfiEraser } from "react-icons/tfi";
import { useParams, useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Reactions from "./Reactions";
import { selectPostById } from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import DateTime from "./DateTime";
import { selectCurrentToken } from "../features/auth/authSlice";

const PostPage = () => {
    const { id } = useParams();
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    // const posts = useSelector(selectAllPosts)
    const post = useSelector((state) => selectPostById(state, Number(id)))

    const navigate = useNavigate();
    // const post = posts?.find((post) => post.id.toString() === id);


    const navigateReadNext = () => {
        navigate(`/post/${Number(id) + 1}`);
    };

    if (!post) {
        return (
            <section className="content-container">
                <h2 className="dark:text-outrageousOrange text-2xl font-semibold">Post not found!</h2>
            </section>
        )
    }
    return (
        <main className="content-container">
            <article className="post">
                {post ? (
                    <div className="flex flex-col gap-4 w-3/4 py-5">
                        <div className=" py-4 flex justify-between items-center">
                            <div className="datetime text-md">
                                <DateTime timestamp={post.datetime} />
                            </div>
                            <span
                                onClick={() => navigateReadNext()}
                                className='linkTo text-forestGreen  dark:text-outrageousOrange font-medium'>Next </span>
                        </div>
                        <h2 className="flex text-4xl md:text-6xl font-semibold flex-nowrap  transition duration-300 ease-in-out">
                            {" "}
                            {post.title}
                        </h2>
                        <hr className="divider" />
                        <div className="post-author">
                            <PostAuthor userId={post.userId} />
                        </div>
                        <p className="post-text">{post.body}</p>

                        <div>
                            <Reactions post={post} />
                        </div>

                        <hr className="divider" />
                        <div className="flex flex-wrap w-2/3 ">
                            <h5 className="relative uppercase mr-2">Tags</h5>
                            {post.tags?.map((tag) => (
                                <Tag key={tag} text={tag} />
                            ))}
                        </div>

                        {token ?
                            (<div className="flex items-center space-x-5 sm:pr-4">
                                <Link to={`/post/edit/${post.id}`}>
                                    <button className="filled-btn ">
                                        <TfiEraser size="25" /> Edit
                                    </button>
                                </Link>
                            </div>) :
                            <div>
                                <em>
                                    Authors appreciate your reactions
                                </em>
                            </div>
                        }
                    </div>
                ) : (
                    <h2 className="dark:text-outrageousOrange text-2xl font-semibold">
                        There's a problem loading this post{" "}
                    </h2>
                )}
            </article>
        </main>
    );
};

export default PostPage;
