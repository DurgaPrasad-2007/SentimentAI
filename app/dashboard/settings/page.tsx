import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SettingsInterface } from "@/components/settings-interface"
import { SidebarInset } from "@/components/ui/sidebar"

export default function SettingsPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <SettingsInterface />
      </SidebarInset>
    </SidebarProvider>
  )
}
