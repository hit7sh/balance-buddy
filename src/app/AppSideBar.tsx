import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar"

// interface AppSidebarPropsI {
//     problems: Problem[] | undefined;
//     setCurrentProblem: any;
//     currentProblem: Problem | undefined;
//     solvedProblems: string[],
// };

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
                            {/* <SiGmail size={20} color="red" /> */}
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hitesh-saini-80499a1b3/"
                        target="_blank"
                    >
                        <div className="rounded-sm ml-2">
                            {/* <LinkedInIcon></LinkedInIcon> */}
                        </div>
                    </a>

                    <a
                        href="https://www.x.com/hit7sh"
                        target="_blank"
                    >
                        <div className="rounded-sm ml-2">
                            {/* <TwitterIcon></TwitterIcon> */}
                        </div>
                    </a>
                </SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <div className="border-t border-black" />
                <SidebarGroup>
                    <SidebarGroupLabel className="text-black text-lg bg-gray-600 mb-4">Problems</SidebarGroupLabel>

                    {/* <SidebarGroupContent>
                        {
                            problems?.map((problem: Problem) => (
                                <div
                                    className={`pl-1 flex justify-between hover:cursor-pointer rounded-md text-black pt-1 pb-1 ${currentProblem?.title === problem?.title ? 'bg-blue-600' : 'bg-slate-300'}`}
                                    onClick={() => problem?.title !== currentProblem?.title && setCurrentProblem(problem)}
                                >
                                    <div>{problem?.title}</div>
                                    {solvedProblems.find((title) => title === problem?.title) && (<svg className="w-[3.5vh] h-[3.5vh]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#31AF1C">
                                        <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
                                    </svg>)}
                                </div>
                            ))
                        }
                    </ SidebarGroupContent> */}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
