import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { LogOut, User, Shield, AlertTriangle } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  userType: string;
  username: string;
  onLogout: () => void;
}

export const DashboardHeader = ({ title, subtitle, userType, username, onLogout }: DashboardHeaderProps) => {
  const isPolice = userType === 'Police Force';
  
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex flex-col gap-4 p-4">
        {/* Top Row - User Info and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isPolice ? (
              <AlertTriangle className="h-6 w-6 text-critical" />
            ) : (
              <Shield className="h-6 w-6 text-primary" />
            )}
            <div className="flex items-center gap-3 px-3 py-1.5 bg-secondary/50 rounded-lg">
              <User className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <p className="font-medium">{username}</p>
                <p className="text-xs text-muted-foreground">{userType}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-safe-light text-safe border-safe/20">
              <div className="w-2 h-2 bg-safe rounded-full mr-2 animate-pulse" />
              System Online
            </Badge>
            <SidebarTrigger className="h-8 w-8" />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Bottom Row - Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};