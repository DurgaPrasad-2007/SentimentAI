import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, UserPlus, Crown, Shield, Eye, Settings, Mail, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@company.com",
    role: "Admin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "2 hours ago",
    status: "active",
    permissions: ["full_access", "user_management", "billing"],
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@company.com",
    role: "Analyst",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "1 day ago",
    status: "active",
    permissions: ["read_analytics", "export_data"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily@company.com",
    role: "Viewer",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "3 days ago",
    status: "inactive",
    permissions: ["read_only"],
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@company.com",
    role: "Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    lastActive: "5 minutes ago",
    status: "active",
    permissions: ["api_access", "webhook_management"],
  },
]

const rolePermissions = {
  Admin: ["Full platform access", "User management", "Billing & subscriptions", "API management"],
  Analyst: ["View all analytics", "Export data", "Create reports", "Manage alerts"],
  Developer: ["API access", "Webhook management", "Integration setup", "Technical documentation"],
  Viewer: ["Read-only access", "Basic dashboard view", "Download reports"],
}

export function TeamManagement() {
  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin":
        return <Crown className="h-4 w-4 text-yellow-600" />
      case "Analyst":
        return <Shield className="h-4 w-4 text-blue-600" />
      case "Developer":
        return <Settings className="h-4 w-4 text-purple-600" />
      default:
        return <Eye className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold">Team Management</h1>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Team Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">+1 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">75% activity rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Usage</CardTitle>
            <Settings className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847</div>
            <p className="text-xs text-muted-foreground">requests today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Seat Usage</CardTitle>
            <Crown className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/10</div>
            <p className="text-xs text-muted-foreground">6 seats available</p>
          </CardContent>
        </Card>
      </div>

      {/* Invite New Member */}
      <Card>
        <CardHeader>
          <CardTitle>Invite Team Member</CardTitle>
          <CardDescription>Add new team members and assign appropriate roles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Input placeholder="Enter email address" className="flex-1" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="analyst">Analyst</SelectItem>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Mail className="h-4 w-4 mr-2" />
              Send Invite
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Team Members List */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members and their permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium">{member.name}</h3>
                      <Badge className={getStatusColor(member.status)}>{member.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                    <p className="text-xs text-muted-foreground">Last active: {member.lastActive}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      {getRoleIcon(member.role)}
                      <Badge variant="outline">{member.role}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{member.permissions.length} permissions</p>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                      <DropdownMenuItem>Change Role</DropdownMenuItem>
                      <DropdownMenuItem>View Activity</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Remove Member</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Permissions */}
      <Card>
        <CardHeader>
          <CardTitle>Role Permissions</CardTitle>
          <CardDescription>Overview of permissions for each role type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(rolePermissions).map(([role, permissions]) => (
              <div key={role} className="space-y-3">
                <div className="flex items-center space-x-2">
                  {getRoleIcon(role)}
                  <h3 className="font-medium">{role}</h3>
                </div>
                <ul className="space-y-1">
                  {permissions.map((permission, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
