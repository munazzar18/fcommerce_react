import { useSelector } from "react-redux";
import { selectAllPosts } from "./post.slice";
import PostAuther from "./PostAuther";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => {
    return (
      <article className="p-6 border-2 mb-4 w-96" key={post.id}>
        <h3 className="font-bold text-xl"> {post.title} </h3>
        <p> {post.content.substring(0, 100)} </p>
        <p>
          <PostAuther userId={post.user} />
        </p>
      </article>
    );
  });
  return (
    <section className="flex flex-col align-middle items-center">
      <h2 className="text-2xl font-bold m-6">Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
