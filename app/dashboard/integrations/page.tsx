import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { IntegrationsInterface } from "@/components/integrations-interface"
import { SidebarInset } from "@/components/ui/sidebar"

export default function IntegrationsPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <IntegrationsInterface />
      </SidebarInset>
    </SidebarProvider>
  )
}
