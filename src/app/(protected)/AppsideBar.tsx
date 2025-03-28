"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Plus,
  Presentation,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const item = [
  {
    tilte: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    tilte: "Meeting",
    url: "/meetings",
    icon: Presentation,
  },
  {
    tilte: "Q&A",
    url: "/qa",
    icon: Bot,
  },
  {
    tilte: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
];

const projects = [
  { id: 1, name: "project1" },
  { id: 2, name: "project2" },
  { id: 3, name: "project3" },
];
const AppsideBar = () => {
  const pathname = usePathname();
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          {/* <Image/> add image with width and height 40 add src of public folder image */}
          {open && (
            <h1 className="text-xl font-bold text-primary/80">gitWay</h1>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.map((item) => {
                return (
                  <SidebarMenuItem key={item.tilte}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn({
                          "!bg-primary !text-white": pathname === item.url,
                        })}
                      >
                        <item.icon />
                        <span>{item.tilte}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => {
                return (
                  <SidebarMenuItem key={project.id}>
                    <SidebarMenuButton asChild>
                      <div>
                        <div
                          className={cn(
                            "flex size-6 items-center justify-center rounded-sm border bg-white p-3 text-sm text-primary",
                            {
                              "bg-primary text-white": true,
                              // 'bg-primary text-white': project.id === project.id
                            },
                          )}
                        >
                          {project.name[0]}
                        </div>
                        <span>{project.name}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
                          <div className="h-2"></div>
                          {open && 
                              (
                                <SidebarMenuItem>
                                <Link href="/create">
                                  <Button size={"sm"} className="w-fit" variant={"outline"}>
                                    <Plus />
                                    Create Project
                                  </Button>
                                </Link>
                              </SidebarMenuItem>
                              
                          )}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppsideBar;
