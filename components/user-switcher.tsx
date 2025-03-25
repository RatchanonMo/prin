"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAccessControl } from "@/components/access-control"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { UserCog } from "lucide-react"

// This component is for demo purposes only to simulate different user roles
export function UserSwitcher() {
  const { user, switchUser } = useAccessControl() as any // Using any because switchUser is only for demo
  const [open, setOpen] = useState(false)

  const users = [
    {
      id: "user1",
      name: "Jane Smith",
      email: "jane@acmecorp.com",
      company: "Acme Corp",
      role: "Company User",
      initials: "JS",
    },
    {
      id: "user2",
      name: "Dr. Emma Chen",
      email: "emma@greenstart.com",
      company: "GreenStart",
      role: "ESG Team Member",
      initials: "EC",
    },
    {
      id: "user3",
      name: "Michael Rodriguez",
      email: "michael@greenstart.com",
      company: "GreenStart",
      role: "Admin",
      initials: "MR",
    },
  ]

  const handleSwitchUser = (userId: string) => {
    switchUser(userId)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="fixed bottom-4 right-4 z-50">
          <UserCog className="h-4 w-4 mr-2" />
          Switch User (Demo)
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Switch User (Demo Only)</DialogTitle>
          <DialogDescription>
            This is for demonstration purposes to show different user roles and permissions.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {users.map((demoUser) => (
            <div
              key={demoUser.id}
              className={`flex items-center justify-between p-3 rounded-md border ${user?.id === demoUser.id ? "bg-primary/10 border-primary" : "hover:bg-muted cursor-pointer"}`}
              onClick={() => handleSwitchUser(demoUser.id)}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback
                    className={user?.id === demoUser.id ? "bg-primary text-primary-foreground" : "bg-muted"}
                  >
                    {demoUser.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{demoUser.name}</p>
                  <p className="text-sm text-muted-foreground">{demoUser.role}</p>
                </div>
              </div>
              {user?.id === demoUser.id && (
                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Current</span>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

