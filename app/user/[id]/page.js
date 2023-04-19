import { getSingleUserDetails } from "@/app/utils/features";
import { Suspense } from "react";
import UserPosts from "./UserPosts";

export async function generateMetadata({ params }) {
  const { id } = params;
  const user = await getSingleUserDetails(id);
  return {
    title: `${user.name}'s Details`,
    description: user.email,
  };
}

const page = async ({ params }) => {
  const { id } = params;
  const user = await getSingleUserDetails(id);
  return (
    <>
      <div className="flex col gp-4">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>

      <Suspense fallback={<div>SuspenseLoading ... 😜</div>}>
        <UserPosts id={id} />
      </Suspense>
    </>
  );
};

export default page;
