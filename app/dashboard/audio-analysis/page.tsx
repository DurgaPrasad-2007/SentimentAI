import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { AudioAnalysisInterface } from "@/components/audio-analysis-interface"
import { SidebarInset } from "@/components/ui/sidebar"

export default function AudioAnalysisPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <AudioAnalysisInterface />
      </SidebarInset>
    </SidebarProvider>
  )
}
