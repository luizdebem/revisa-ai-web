import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const SidebarItem = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={`py-3 px-2 border my-2 rounded-xl border-black text-center ${match ? "border-base-blue text-base-blue" : ""}`} to={to}>
      { children }
    </Link>
  )
}

export default SidebarItem