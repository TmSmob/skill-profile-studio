import SkillSlider from "@/components/SkillSlider";
import { skills } from "@/data/skills";

interface SkillListProps {
  skillValues: Record<string, number>;
  onSkillChange: (id: string, value: number) => void;
}

export const SkillList = ({ skillValues, onSkillChange }: SkillListProps) => {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div 
          key={skill.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <SkillSlider
            label={skill.label}
            value={skillValues[skill.id]}
            onChange={(value) => onSkillChange(skill.id, value)}
            icon={skill.icon}
          />
        </div>
      ))}
    </div>
  );
};

