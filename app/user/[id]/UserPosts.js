import { getUserPosts } from "@/app/utils/features";

const UserPosts = async ({ id }) => {
  const posts = await getUserPosts(id);
  return (
    <>
      <div className="flex col gp-4">
        <h1>Posts</h1>
        {posts?.map((post) => (
          <div key={post.id} className="flex col gp-4">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserPosts;
