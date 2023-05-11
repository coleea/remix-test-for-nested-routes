import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { useOptionalUser } from "~/utils";


export default function Index() {
  return (
      <div className="">
        blog page in blog.tsx
        <Outlet/>
      </div>
  );
}
