"use client";

import React, { useState } from "react";

const NavSearchBox = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="navsearchbox">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        value={search}
        placeholder="Search"
      />
    </div>
  );
};

export default NavSearchBox;
