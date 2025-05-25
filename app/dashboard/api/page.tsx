import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { ApiDocumentation } from "@/components/api-documentation"
import { SidebarInset } from "@/components/ui/sidebar"

export default function ApiPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <ApiDocumentation />
      </SidebarInset>
    </SidebarProvider>
  )
}
