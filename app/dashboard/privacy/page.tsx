import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { PrivacyEthics } from "@/components/privacy-ethics"
import { SidebarInset } from "@/components/ui/sidebar"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function PrivacyPage() {
  return (
    <AuthGuard requiredRole={["admin"]}>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <PrivacyEthics />
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}
