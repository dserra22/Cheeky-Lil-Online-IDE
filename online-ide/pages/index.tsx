import React from "react";
import Link from "next/link";

// <Link replace href="/about">  replace prop doesnt push new page, it replaces it. So you cannot go back
//   About
// </Link>

const Index = () => {
  return (
    <div>
      <h1>HomePage</h1>

      <ul>
        <li>
          {/* no using links to navigate thru pages */}
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
