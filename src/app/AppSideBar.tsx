"use-client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { SiGmail, SiLinkedin} from "react-icons/si";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarGroupLabel className="text-black font-bold font-mono text-center mt-1">
                    Let's Connect👋
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=hit7sh@gmail.com"
                        target="_blank"
                    >
                        <div className="border-solid rounded-sm ml-2 px-4 p-1.5 border-black bg-slate-300">
                            <SiGmail size={20} color="red" />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hitesh-saini-80499a1b3/"
                        target="_blank"
                    >
                        <div className="rounded-sm ml-2">
                            <SiLinkedin></SiLinkedin>
                        </div>
                    </a>
                </SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <div className="border-t border-black" />
                <SidebarGroup>
                    <SidebarGroupLabel className="text-black text-lg bg-gray-600 mb-4">Balance Buddy💸</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <div className="pl-1 flex justify-between hover:cursor-pointer rounded-md text-black pt-1 pb-1 bg-slate-300">Friends</div>
                        <div className="pl-1 flex justify-between hover:cursor-pointer rounded-md text-black pt-1 pb-1 bg-slate-300">Statistics</div>
                        <div className="pl-1 flex justify-between hover:cursor-pointer rounded-md text-black pt-1 pb-1 bg-slate-300">Activites</div>

                    </ SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
