import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SkillList } from "@/components/SkillList";
import SummaryPanel from "@/components/SummaryPanel";
import { useSkillProfile } from "@/hooks/useSkillProfile";

const Index = () => {
  const {
    skillValues,
    updateSkill,
    resetSkills,
    averageScore,
    strengths,
    weaknesses,
    profileLabel,
  } = useSkillProfile();

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Sliders */}
        <div className="space-y-4">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">
            Rate Your Skills
          </h2>
          <SkillList 
            skillValues={skillValues} 
            onSkillChange={updateSkill} 
          />

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
            averageScore={averageScore}
            strengths={strengths}
            weaknesses={weaknesses}
            profileLabel={profileLabel}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
