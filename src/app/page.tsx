"use client"
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
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "./constants";
import SearchableDropdown from "./Search";

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const clientId = process.env.NEXT_PUBLIC_CLIENTID;

export default function Home() {
  const [user, setUser] = useState<any>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [friends, setFriends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const initiate = async () => {
    setApiLoading(true);
    let res;
    try {
      res = await axios.get(`${BACKEND_BASE_URL}/person/get-user/${user?.email}`);
    } catch (e) {
      res = await axios.post(`${BACKEND_BASE_URL}/person/add`, {
        name: user?.name,
        email: user?.email,
        balanceSheet:{
            totalAmountPaid:0,
            oweAmount:0,
            dueAmount:0,
            balanceData:[]
        }
      });
    }
    const allUsersRes = await axios.get(`${BACKEND_BASE_URL}/person/get-all-users`);
    console.log({res});
    
    setApiResponse(res?.data);
    setFriends(res?.data?.balanceSheet?.balanceData?.map?.(({friendEmail, friendName}: any) => ({email:friendEmail, name: friendName})));
    setAllUsers(
      allUsersRes?.data?.map?.(
        ({name, email}: any) => ({name, email})
      )?.filter?.(
        ({email}: any) => email !== user?.email)
      );
    
    setApiLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      initiate();
    }
    }, [user]);
  
  return (
    <>
    <Auth0Provider
          domain={domain||''}
          clientId={clientId||''}
          authorizationParams={{
            redirect_uri: "https://balancebuddy-gold.vercel.app",
          }}
        >
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
      <main className="w-screen h-screen overflow-hidden">
      
        <Header
          setUser={setUser}
          setIsAuthenticated={setIsAuthenticated}
          allUsers={allUsers}
          friends={friends}
          reInitiateHome={initiate}
          setFriends={setFriends}
          loggedInEmail={user?.email}
        >
          <SidebarTrigger />
        </Header>
        {!isAuthenticated && "PLEASE SIGN IN TO CONTINUE"}
        {isAuthenticated && (
          <div className="grid grid-cols-12  h-full ">
            <BalanceSummary user={user} apiLoading={apiLoading} apiResponse={apiResponse} />
            <OutstandingBalanceList apiLoading={apiLoading} balanceList={apiResponse?.balanceSheet?.balanceData} />
            <AddExpense
              user={user}
              friends={friends}
              reInitiateHome={initiate}
            />
          </div>)
        }
        
      </main>
    </SidebarProvider>
    
    </Auth0Provider>
    
    </>
  );
}
