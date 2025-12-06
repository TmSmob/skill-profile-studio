import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Award, BarChart3 } from "lucide-react";

interface SummaryPanelProps {
  averageScore: number;
  strengths: string[];
  weaknesses: string[];
  profileLabel: string;
}

const SummaryPanel = ({ averageScore, strengths, weaknesses, profileLabel }: SummaryPanelProps) => {
  return (
    <div className="space-y-5 animate-fade-in">
      {/* Profile Label Card */}
      <Card className="overflow-hidden border-0 shadow-card">
        <div className="gradient-accent p-6">
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-6 w-6 text-accent-foreground/90" />
            <span className="text-sm font-medium text-accent-foreground/80 uppercase tracking-wide">Your Profile</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-accent-foreground">{profileLabel}</h3>
        </div>
      </Card>

      {/* Overall Score */}
      <Card className="border border-border/50 shadow-soft">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-medium">
            <BarChart3 className="h-5 w-5 text-primary" />
            Overall Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-display font-bold text-foreground">{averageScore.toFixed(1)}</span>
            <span className="text-lg text-muted-foreground">/ 10</span>
          </div>
          <div className="mt-3 h-2.5 w-full rounded-full bg-muted overflow-hidden">
            <div 
              className="h-full rounded-full gradient-hero transition-all duration-500 ease-out"
              style={{ width: `${(averageScore / 10) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Strengths */}
      <Card className="border border-border/50 shadow-soft">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-medium">
            <TrendingUp className="h-5 w-5 text-primary" />
            Top Strengths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {strengths.map((strength, index) => (
              <li 
                key={strength} 
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </div>
                <span className="font-medium text-foreground">{strength}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Improvement Areas */}
      <Card className="border border-border/50 shadow-soft">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base font-medium">
            <TrendingDown className="h-5 w-5 text-muted-foreground" />
            Areas for Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {weaknesses.map((area, index) => (
              <li 
                key={area} 
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  •
                </div>
                <span className="text-muted-foreground">{area}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryPanel;
