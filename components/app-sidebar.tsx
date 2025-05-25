import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { BarChart3, Brain, FileText, Mic, ImageIcon, Settings, Globe, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Text Analysis",
    url: "/dashboard/text-analysis",
    icon: FileText,
  },
  {
    title: "Audio Analysis",
    url: "/dashboard/audio-analysis",
    icon: Mic,
  },
  {
    title: "Visual Analysis",
    url: "/dashboard/visual-analysis",
    icon: ImageIcon,
  },
]

const integrationItems = [
  {
    title: "Integrations",
    url: "/dashboard/integrations",
    icon: Globe,
  },
  {
    title: "API Access",
    url: "/dashboard/api",
    icon: Zap,
  },
  {
    title: "Team Management",
    url: "/dashboard/team",
    icon: Users,
  },
]

const settingsItems = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Privacy & Ethics",
    url: "/dashboard/privacy",
    icon: Shield,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-2 py-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">SentimentAI</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Analysis</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {integrationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-2 text-xs text-gray-500">v2.0.0 - Real-time AI Analytics</div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
