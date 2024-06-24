import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components /Header"




export default function Home() {
 
  return (
    <>
   <Header />
   <h1>Home</h1>

  </>
  );
}
