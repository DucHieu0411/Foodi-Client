"use client";
import ButtonRedirect from "@/components/ButtonRedirect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Guys</h1>
      <ul>
        <li>
          <Button className="text-red-500 ">
            <Link href={"/login"}>Click go to Login</Link>
          </Button>
        </li>
      </ul>
      <ButtonRedirect />
    </div>
  );
}
