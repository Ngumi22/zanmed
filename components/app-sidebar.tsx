"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Products",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Add Product",
          url: "dashboard/add-product",
        },
        {
          title: "Edit Product",
          url: `dashboard/edit-product${1}`,
        },
        {
          title: "Settings",
          url: "dashboard/add-product",
        },
      ],
    },
    {
      title: "Categories",
      icon: Bot,
      items: [
        {
          title: "Add Category",
          url: "dashboard/add-categories",
        },
        {
          title: "Edit Category",
          url: `dashboard/edit-categories/${1}`,
        },
      ],
    },
    {
      title: "Analytics",

      icon: Bot,
      items: [
        {
          title: "Add Category",
          url: "dashboard/add-categories",
        },
        {
          title: "Edit Category",
          url: `dashboard/edit-categories/${1}`,
        },
      ],
    },
    {
      title: "Blog",

      icon: Bot,
      items: [
        {
          title: "Add Blog",
          url: "dashboard/add-blog",
        },
        {
          title: "Edit Blog",
          url: `dashboard/blog/${1}`,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">ZanMed</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}