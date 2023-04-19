/* ssg */
export const getAllUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    return new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
};

/* ssr */
export const getSingleUserDetails = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      cache: "no-cache",
    }
  );
  if (!response.ok) {
    return new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
};

/* ssg */
export const getUserPosts = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  if (!response.ok) {
    return new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
};

/* ISR automatic revalidate after 10s */
export const getAllPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 10 }, // here time unit is second not mili-second
  });
  if (!response.ok) {
    return new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
};

/* SSG */
export const getPostById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
  if (!response.ok) {
    return new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
};