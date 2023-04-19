import { getPostById } from "@/app/utils/features";

const page = async ({ params }) => {
  const { id } = params;
  const post = await getPostById(id);
  return (
    <>
      <h3>page for id: {id}</h3>
      <div className="flex col gp-4">
        <h1>{post[0].title}</h1>
        <p>{post[0].body}</p>
      </div>
    </>
  );
};

export default page;
