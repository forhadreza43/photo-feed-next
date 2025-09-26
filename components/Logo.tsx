import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <span className="font-bold text-xl">PhotoFeed</span>
    </Link>
  );
};

export default Logo;
