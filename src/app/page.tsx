"use Client"
import Image from "next/image";
import Header from "./Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";
import { Button } from "@/components/ui/button";
import FriendCard from "./FriendCard";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
      <main className="w-screen h-screen overflow-hidden">
      
        <Header><SidebarTrigger /></Header>
        
    <div className="grid grid-cols-12  h-full">
            <div className="col-span-2">
              <div className=" bg-slate-50 shadow rounded-lg p-4 m-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">Total Paid</h3>
                <hr className="my-2 border-gray-300" />
                <p className="text-2xl font-bold text-gray-900 text-center">₹1,234.56</p>
              </div>
              <div className=" bg-red-50 shadow rounded-lg p-4 m-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">Borrowed</h3>
                <hr className="my-2 border-gray-300" />
                <p className="text-2xl font-bold text-gray-900 text-center">₹1,234.56</p>
              </div>
              <div className="bg-green-50 shadow rounded-lg p-4 m-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">Get Back</h3>
                <hr className="my-2 border-gray-300" />
                <p className="text-2xl font-bold text-gray-900 text-center">₹1,234.56</p>
              </div>
            </div>
            <div className="col-span-7 bg-green-200">
                <h1 className="text-center font-bold text-2xl mt-2 underline">Friends balance</h1>

                <FriendCard />
              {/* </div> */}
            </div>
            <div className="col-span-3 bg-yellow-200">
                <h3 className="pt-5 text-lg font-semibold text-gray-800 text-center">Get Back</h3>
                <center>
                                <Input className="bg-white m-2 w-5/6"></Input>
                </center>
                <h3 className="text-lg font-semibold text-gray-800 text-center">Description</h3>
                <center>
                                <Input className="bg-white m-2 w-5/6"></Input>
                </center>


                <h3 className="text-lg font-semibold text-gray-800 text-center">Split Type</h3>

                <center>
                                <Input className="bg-white m-2 w-5/6"></Input>
                </center>


                <center>

                <Button className="mt-2">+ Add Expense</Button>
                </center>
            </div>
        </div>
        
      </main>
    </SidebarProvider>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started-by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </>
  );
}
