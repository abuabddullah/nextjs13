"use client";

const Contact = ({ children,myProps }) => {
  return (
    <>
    <h1>myProps: {myProps}</h1>
    <h3>use of ServerSideComponent into ClientSideComponent in Contact page</h3>
    <small>http://localhost:3000/Contact</small>
      {children}
    </>
  );
};

export default Contact;
