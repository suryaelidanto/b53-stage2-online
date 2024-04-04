import CardPost from "../components/cardPost";
import { PostProvider } from "../context/post/PostProvider";

const Post = () => {

    return (
        <PostProvider>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <CardPost />
        </PostProvider>
    );
};

export default Post;
