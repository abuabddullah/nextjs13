import Link from "next/link";
import { getAllUser } from "./utils/features";

const page = async () => {
  const users = await getAllUser();
  // console.log(users);
  return (
    <>
      <div className="flex col gp-4">
        {users?.map((user) => {
          return (
            <Link href={`/user/${user.id}`} key={user.id}>
              <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default page;
