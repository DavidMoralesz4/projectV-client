"use client";

import * as React from "react";
import {
  Store,
  // Bot,
  // Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  Shirt,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects"
// import { NavSecondary } from "@/components/nav-secondary"
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
import { ModeToggle } from "./mode-togle";
import ClothingBrandFilter from "./ClothingBrandFilter";

const data = {
  user: {
    name: "Jose Morales",
    email: "joseEl209@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Catalogo",
      url: "#",
      icon: Shirt,
      isActive: true,
      items: [
        {
          title: "Zapatos",
          url: "/dashboard/shoes",
        },
        {
          title: "Tecnologia",
          url: "/dashboard/technology",
        },
        {
          title: "Ropa",
          url: "/dashboard/clothes",
        },
        {
          title: "Belleza",
          url: "/dashboard/beauty",
        },
        {
          title: "Hogar",
          url: "/dashboard/home",
        },
      ],
    },
    // {
    //   title: "Marcas",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Nike",
    //       url: "#",
    //     },
    //     {
    //       title: "Adidas",
    //       url: "#",
    //     },
    //     {
    //       title: "Puma",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Tienda",
      url: "#",
      icon: Store ,
      items: [
        {
          title: "Registro de ventas",
          url: "/dashboard/store",
        },
        {
          title: "Clientes",
          url: "#",
        },
      ],
    },
    {
      title: "Ajustes",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Perfil",
          url: "#",
        },
        {
          title: "Gestion",
          url: "#",
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
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <span className="truncate font-semibold text-[22px]">V</span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xs">Easy Solutions Pro</span>
                </div>
                  <ModeToggle />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <ClothingBrandFilter />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

