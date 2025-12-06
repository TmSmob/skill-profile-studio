import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import SkillSlider from "@/components/SkillSlider";
import SummaryPanel from "@/components/SummaryPanel";
import { 
  MessageCircle, 
  Heart, 
  Crown, 
  Shield, 
  Shuffle, 
  Clock,
  RotateCcw,
  Sparkles
} from "lucide-react";

interface SkillData {
  key: string;
  label: string;
  icon: React.ReactNode;
  defaultValue: number;
}

const skills: SkillData[] = [
  { key: "communication", label: "Communication", icon: <MessageCircle className="h-5 w-5" />, defaultValue: 7 },
  { key: "empathy", label: "Empathy", icon: <Heart className="h-5 w-5" />, defaultValue: 6 },
  { key: "leadership", label: "Leadership", icon: <Crown className="h-5 w-5" />, defaultValue: 5 },
  { key: "conflictResolution", label: "Conflict Resolution", icon: <Shield className="h-5 w-5" />, defaultValue: 6 },
  { key: "adaptability", label: "Adaptability", icon: <Shuffle className="h-5 w-5" />, defaultValue: 7 },
  { key: "timeManagement", label: "Time Management", icon: <Clock className="h-5 w-5" />, defaultValue: 5 },
];

const Index = () => {
  const [skillValues, setSkillValues] = useState<Record<string, number>>(
    skills.reduce((acc, skill) => ({ ...acc, [skill.key]: skill.defaultValue }), {})
  );

  const updateSkill = (key: string, value: number) => {
    setSkillValues(prev => ({ ...prev, [key]: value }));
  };

  const resetSkills = () => {
    setSkillValues(
      skills.reduce((acc, skill) => ({ ...acc, [skill.key]: skill.defaultValue }), {})
    );
  };

  const summary = useMemo(() => {
    const values = Object.entries(skillValues).map(([key, value]) => ({
      key,
      label: skills.find(s => s.key === key)?.label || key,
      value,
    }));

    const average = values.reduce((sum, v) => sum + v.value, 0) / values.length;
    
    const sorted = [...values].sort((a, b) => b.value - a.value);
    const strengths = sorted.slice(0, 2).map(v => v.label);
    const improvements = sorted.slice(-2).map(v => v.label);

    // Profile label logic
    let profileLabel = "Balanced Growth Profile";
    const commValue = skillValues.communication;
    const empathyValue = skillValues.empathy;
    const leadershipValue = skillValues.leadership;
    const conflictValue = skillValues.conflictResolution;

    if (commValue >= 8 && empathyValue >= 8) {
      profileLabel = "Collaborative Communicator";
    } else if (leadershipValue >= 8 && conflictValue >= 8) {
      profileLabel = "Decisive Leader";
    }

    return { average, strengths, improvements, profileLabel };
  }, [skillValues]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-hero shadow-soft">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Soft Skill Strength Analyzer
            </h1>
          </div>
          <p className="text-muted-foreground ml-[52px]">
            Rate your soft skills and see your profile instantly.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Sliders */}
          <div className="space-y-4">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">
              Rate Your Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.key}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <SkillSlider
                    label={skill.label}
                    value={skillValues[skill.key]}
                    onChange={(value) => updateSkill(skill.key, value)}
                    icon={skill.icon}
                  />
                </div>
              ))}
            </div>

            {/* Reset Button */}
            <Button 
              variant="secondary" 
              onClick={resetSkills}
              className="mt-6 w-full sm:w-auto"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Default
            </Button>
          </div>

          {/* Right Column - Summary */}
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">
              Your Profile Summary
            </h2>
            <SummaryPanel
              averageScore={summary.average}
              strengths={summary.strengths}
              improvements={summary.improvements}
              profileLabel={summary.profileLabel}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            This tool is for reflection only and not a formal assessment.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
