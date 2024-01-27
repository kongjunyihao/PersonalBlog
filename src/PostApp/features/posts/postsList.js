import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";


const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);


  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)))
    // const orderedPosts = posts.slice().sort((a, b) => a.date - b.date)
    content = orderedPosts.map(post => (
      <PostsExcerpt key={post.id} post={post} />
    ))
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <section>
      {content}
    </section>
  )
}

export default PostsList
