"use Client"
import Image from "next/image";
import Header from "./Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";
import { Button } from "@/components/ui/button";
import FriendCard from "./FriendCard";
import { Input } from "@/components/ui/input";
import AddExpense from "./AddExpense";
import BalanceSummary from "./BalanceSummary";
import OutstandingBalanceList from "./OutstandingBalanceList";

export default function Home() {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
      <main className="w-screen h-screen overflow-hidden">
      
        <Header><SidebarTrigger /></Header>
        
    <div className="grid grid-cols-12  h-full ">
            <BalanceSummary />
            <OutstandingBalanceList />
            <AddExpense></AddExpense>
        </div>
        
      </main>
    </SidebarProvider>
    </>
  );
}
