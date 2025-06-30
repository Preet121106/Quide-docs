
import { useState } from "react"
import {
    LayoutGrid, ShieldCheck, Languages, EyeClosed, Command, Codesandbox, StickyNote, MonitorUp,
   ScreenShare, ClipboardType
  } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "General",
    items: [
      { title: "Getting Started ", url: "/", icon: LayoutGrid },
      { title: "Basic Checks", url: "/quick-start", icon: ShieldCheck },
      { title: "Language Support", url: "/languages", icon: Languages },
    ]
  },
  {
    title: "Undetectibility",
    items: [
      { title: "Stealth", url: "/stealth", icon: EyeClosed },
      { title: "Commands", url: "/shortcuts", icon: Command },
      { title: "SandBoxing", url: "/sandbox", icon: Codesandbox },   //url left is  /utilities and used /shortcuts isntead
    ]
  },
  {
    title: "TroubleShooting",
    items: [
      { title: "Can't see screen?", url: "/hooks", icon: StickyNote },
      { title: "Shows when I share Screen", url: "/troubleshooting", icon: MonitorUp },
      { title: "Screen Share permissions", url: "/utilities", icon: ScreenShare },
    ]
  },
  {
    title: "Support",
    items: [
      { title: "Support Form", url: "/helpform", icon: ClipboardType },
    ]
  }
]

export function AppSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `w-full justify-start transition-colors ${
      isActive 
        ? "bg-sidebar-accent text-sidebar-primary font-medium" 
        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    }`

  return (
    <Sidebar
      className={`${collapsed ? "w-14" : "w-64"} border-r border-sidebar-border bg-sidebar-background`}
      collapsible="icon"
    >
      <SidebarContent className="p-0">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                    <img
                      src="../../Quide-512.png"
                      alt="Browser vs Native App"
                      className="w-5 h-5"
                    />
            </div>
            {!collapsed && (
              <h1 className="font-semibold text-sidebar-foreground">Quide</h1>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          {navigationItems.map((section) => {
            const hasActiveItem = section.items.some(item => isActive(item.url))
            
            return (
              <SidebarGroup
                key={section.title}
                className="border-b border-sidebar-border/50 last:border-b-0"
              >
                {!collapsed && (
                  <SidebarGroupLabel className="px-4 py-2 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                    {section.title}
                  </SidebarGroupLabel>
                )}

                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink 
                            to={item.url} 
                            end 
                            className={getNavCls}
                            aria-label={`Navigate to ${item.title}`}
                          >
                            <item.icon className={`h-4 w-4 ${collapsed ? "mx-auto" : "mr-3"}`} />
                            {!collapsed && <span>{item.title}</span>}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )
          })}
        </div>
        <div
      style={{
        fontSize: "12px",
        color: "#888", // light gray
        textAlign: "center",
        padding: "1rem",
        borderTop: "1px solid #333", // optional separator
        backgroundColor: "transparent",
      }}
    >
      © 2025 Quide. <br />
      All rights reserved
    </div>
      </SidebarContent>
    </Sidebar>
  )
}
