import { 
  Radar, 
  FileText, 
  ScanLine, 
  BarChart3 
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

interface PoliceSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'monitoring', title: 'Real-time Monitoring', icon: Radar },
  { id: 'fir', title: 'Auto FIR Generation', icon: FileText },
  { id: 'sos', title: 'SOS Tracking', icon: ScanLine },
  { id: 'analytics', title: 'Analytics', icon: BarChart3 },
];

export function PoliceSidebar({ activeTab, onTabChange }: PoliceSidebarProps) {
  const { state } = useSidebar();

  return (
    <Sidebar className="w-72 border-l border-border" collapsible="icon" side="right">
      <SidebarContent className="bg-secondary/30">
        <SidebarGroup>
          <SidebarGroupLabel className="text-critical font-semibold text-center py-4 border-b border-border">
            Control Panel
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
                        ? 'bg-critical text-critical-foreground font-medium shadow-sm' 
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