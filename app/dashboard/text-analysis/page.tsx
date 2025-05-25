import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { TextAnalysisInterface } from "@/components/text-analysis-interface"
import { SidebarInset } from "@/components/ui/sidebar"

export default function TextAnalysisPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <TextAnalysisInterface />
      </SidebarInset>
    </SidebarProvider>
  )
}
