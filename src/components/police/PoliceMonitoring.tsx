import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Radar, 
  MapPin, 
  Users, 
  AlertCircle, 
  Clock, 
  Activity,
  ScanLine,
  RefreshCw,
  Zap
} from 'lucide-react';

const mockActiveCases = [
  { id: 'SOS-001', type: 'Mobile App SOS', tourist: 'ROHIT', location: 'Hyderabad, TS (Geofenced)', time: 'Just now', priority: 'critical' },
  { id: 'SOS-002', type: 'Emergency SOS', tourist: 'Raj Patel', location: 'Manali Hills, HP', time: '2 min ago', priority: 'critical' },
  { id: 'SOS-003', type: 'Medical Emergency', tourist: 'Anna Johnson', location: 'Trekking Route, UK', time: '5 min ago', priority: 'critical' },
  { id: 'GEO-004', type: 'Restricted Area Entry', tourist: 'Mike Brown', location: 'Border Zone, J&K', time: '8 min ago', priority: 'high' },
  { id: 'OFF-005', type: 'Device Offline', tourist: 'Lisa Chen', location: 'Last: Delhi Airport', time: '15 min ago', priority: 'medium' },
];

const mockHotspots = [
  { location: 'Kashmir Valley', incidents: 12, riskLevel: 'critical', activeUnits: 8 },
  { location: 'Manali-Leh Highway', incidents: 8, riskLevel: 'high', activeUnits: 5 },
  { location: 'Goa Beach Areas', incidents: 15, riskLevel: 'medium', activeUnits: 12 },
  { location: 'Rajasthan Desert', incidents: 6, riskLevel: 'medium', activeUnits: 4 },
];

export const PoliceMonitoring = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-critical text-critical-foreground';
      case 'high': return 'bg-danger text-danger-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-safe text-safe-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical': return 'text-critical';
      case 'high': return 'text-danger';
      case 'medium': return 'text-warning';
      case 'low': return 'text-safe';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Emergency Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active SOS Alerts</CardTitle>
            <ScanLine className="h-4 w-4 text-critical animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-critical">7</div>
            <p className="text-xs text-muted-foreground">
              +3 in last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Police Units Deployed</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">89</div>
            <p className="text-xs text-muted-foreground">
              Across 12 states
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High-Risk Zones</CardTitle>
            <AlertCircle className="h-4 w-4 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">15</div>
            <p className="text-xs text-muted-foreground">
              Under surveillance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-safe" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-safe">3.4min</div>
            <p className="text-xs text-muted-foreground">
              -45s faster today
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-time India Map */}
        <Card className="lg:row-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Radar className="h-5 w-5" />
              Garuda Live Surveillance Map
            </CardTitle>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-gradient-to-br from-critical/10 to-primary/10 rounded-lg flex items-center justify-center border">
              <div className="text-center space-y-4">
                <Radar className="h-16 w-16 text-critical mx-auto animate-spin" />
                <div>
                  <h3 className="font-semibold">Real-time Police Surveillance</h3>
                  <p className="text-sm text-muted-foreground">
                    Live tracking of SOS alerts, police units, and high-risk zones
                  </p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-critical rounded-full animate-pulse"></div>
                    <span className="text-xs">SOS Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs">Police Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-danger rounded-full"></div>
                    <span className="text-xs">High-Risk Zones</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Emergency Cases */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Active Emergency Cases
            </CardTitle>
            <Badge className="bg-critical text-critical-foreground">
              <Activity className="h-3 w-3 mr-1" />
              LIVE
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockActiveCases.map((case_) => (
                <div 
                  key={case_.id} 
                  className={`p-3 rounded-lg border-l-4 ${
                    case_.priority === 'critical' ? 'border-l-critical bg-critical/5' :
                    case_.priority === 'high' ? 'border-l-danger bg-danger/5' :
                    case_.priority === 'medium' ? 'border-l-warning bg-warning/5' :
                    'border-l-safe bg-safe/5'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">{case_.type}</p>
                      <p className="text-xs text-muted-foreground">
                        {case_.tourist} - {case_.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(case_.priority)} variant="secondary">
                        {case_.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{case_.time}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      View Details
                    </Button>
                    <Button size="sm" className="h-7 text-xs bg-critical hover:bg-critical/90">
                      Dispatch Unit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Crime Hotspots */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Current Hotspots & Deployments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockHotspots.map((hotspot, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-critical/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-critical" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{hotspot.location}</p>
                      <p className="text-xs text-muted-foreground">
                        {hotspot.incidents} incidents today
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium text-sm ${getRiskColor(hotspot.riskLevel)}`}>
                      {hotspot.riskLevel.toUpperCase()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {hotspot.activeUnits} units active
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Response Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-16 bg-critical hover:bg-critical/90 flex-col">
              <ScanLine className="h-6 w-6 mb-2" />
              <span className="text-sm">Mass Alert</span>
            </Button>
            <Button className="h-16 bg-danger hover:bg-danger/90 flex-col">
              <Users className="h-6 w-6 mb-2" />
              <span className="text-sm">Deploy Units</span>
            </Button>
            <Button className="h-16 bg-warning hover:bg-warning/90 flex-col">
              <AlertCircle className="h-6 w-6 mb-2" />
              <span className="text-sm">Zone Alert</span>
            </Button>
            <Button className="h-16 bg-primary hover:bg-primary-hover flex-col">
              <Activity className="h-6 w-6 mb-2" />
              <span className="text-sm">Status Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};