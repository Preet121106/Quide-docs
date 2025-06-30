
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Menu } from "lucide-react"

export function DocumentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Mobile header with sidebar trigger */}
          <header className="lg:hidden h-14 flex items-center border-b border-border bg-card px-4">
            <SidebarTrigger className="p-2 hover:bg-accent rounded-md">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </SidebarTrigger>
            <h1 className="ml-3 font-semibold">Documentation</h1>
          </header>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
            <div className="container max-w-4xl mx-auto px-4 py-8 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
