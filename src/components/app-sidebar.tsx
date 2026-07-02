import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard,
  MapPin,
  Wallet,
  Receipt,
  Gift,
  Shield,
  Settings,
  HelpCircle,
  KeyRound,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { VuraLogo } from "./vura-logo";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

const overview = [{ title: "Dashboard", url: "/dashboard", icon: LayoutDashboard }];
const rides = [
  { title: "Book a ride", url: "/book", icon: MapPin },
  { title: "Trips", url: "/trips", icon: Receipt },
];
const money = [
  { title: "Wallet", url: "/wallet", icon: Wallet },
  { title: "Promotions", url: "/promotions", icon: Gift },
];
const account = [
  { title: "Safety", url: "/safety", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help", url: "/help", icon: HelpCircle },
  { title: "Change password", url: "/change-password", icon: KeyRound },
];

export function AppSidebar() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const group = (label: string, items: typeof overview) => (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = path === item.url;
            return (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton
                  asChild
                  isActive={active}
                  className="rounded-lg data-[active=true]:bg-primary-soft data-[active=true]:text-primary"
                >
                  <Link to={item.url} className="flex items-center gap-2.5">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2.5 px-2 py-2">
          <VuraLogo size={32} />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-primary tracking-tight">VURA</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Ride · Wallet · Trips
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {group("Overview", overview)}
        {group("Rides", rides)}
        {group("Money", money)}
        {group("Account", account)}
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={signOut} className="text-primary rounded-lg">
              <LogOut className="h-4 w-4" />
              <span>Sign out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
