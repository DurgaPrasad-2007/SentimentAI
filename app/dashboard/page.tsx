import { Suspense } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardContent } from "@/components/dashboard-content"
import { SidebarInset } from "@/components/ui/sidebar"
import { AuthGuard } from "@/components/auth/auth-guard"

export default function DashboardPage() {
  return (
    <AuthGuard>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <Suspense fallback={<div className="p-6">Loading dashboard...</div>}>
            <DashboardContent />
          </Suspense>
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}
