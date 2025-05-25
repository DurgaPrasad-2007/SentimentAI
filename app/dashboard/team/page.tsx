import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { TeamManagement } from "@/components/team-management"
import { SidebarInset } from "@/components/ui/sidebar"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function TeamPage() {
  return (
    <AuthGuard requiredRole={["admin", "analyst"]}>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <TeamManagement />
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}
