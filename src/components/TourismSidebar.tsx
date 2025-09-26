import { 
  Monitor, 
  Users, 
  AlertCircle, 
  MapPin, 
  BarChart3, 
  Shield 
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

interface TourismSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'monitoring', title: 'Live Monitoring', icon: Monitor },
  { id: 'tourists', title: 'Tourist Management', icon: Users },
  { id: 'alerts', title: 'Alert Management', icon: AlertCircle },
  { id: 'zones', title: 'Zone Management', icon: MapPin },
  { id: 'analytics', title: 'Analytics', icon: BarChart3 },
  { id: 'blockchain', title: 'Blockchain Verify', icon: Shield },
];

export function TourismSidebar({ activeTab, onTabChange }: TourismSidebarProps) {
  const { state } = useSidebar();

  return (
    <Sidebar className="w-72 border-l border-border" collapsible="icon" side="right">
      <SidebarContent className="bg-secondary/30">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold text-center py-4 border-b border-border">
            Navigation Panel
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => onTabChange(item.id)}
                    className={`
                      w-full justify-start rounded-lg transition-all duration-200
                      ${activeTab === item.id 
                        ? 'bg-primary text-primary-foreground font-medium shadow-sm' 
                        : 'hover:bg-muted/50 hover:shadow-sm'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="ml-3">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}