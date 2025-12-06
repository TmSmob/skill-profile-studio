import { useState, useMemo } from "react";
import { skills } from "@/data/skills";

export interface SkillProfile {
  skillValues: Record<string, number>;
  updateSkill: (id: string, value: number) => void;
  resetSkills: () => void;
  averageScore: number;
  strengths: string[];
  weaknesses: string[];
  profileLabel: string;
}

export const useSkillProfile = (): SkillProfile => {
  const [skillValues, setSkillValues] = useState<Record<string, number>>(
    skills.reduce((acc, skill) => ({ ...acc, [skill.id]: skill.defaultValue }), {})
  );

  const updateSkill = (id: string, value: number) => {
    setSkillValues(prev => ({ ...prev, [id]: value }));
  };

  const resetSkills = () => {
    setSkillValues(
      skills.reduce((acc, skill) => ({ ...acc, [skill.id]: skill.defaultValue }), {})
    );
  };

  const { averageScore, strengths, weaknesses, profileLabel } = useMemo(() => {
    const values = Object.entries(skillValues).map(([id, value]) => ({
      id,
      label: skills.find(s => s.id === id)?.label || id,
      value,
    }));

    const average = values.reduce((sum, v) => sum + v.value, 0) / values.length;
    
    const sorted = [...values].sort((a, b) => b.value - a.value);
    const topStrengths = sorted.slice(0, 2).map(v => v.label);
    const topWeaknesses = sorted.slice(-2).map(v => v.label);

    // Profile label logic
    let label = "Balanced Growth Profile";
    const commValue = skillValues.communication;
    const empathyValue = skillValues.empathy;
    const leadershipValue = skillValues.leadership;
    const conflictValue = skillValues.conflictResolution;

    if (commValue >= 8 && empathyValue >= 8) {
      label = "Collaborative Communicator";
    } else if (leadershipValue >= 8 && conflictValue >= 8) {
      label = "Decisive Leader";
    }

    return {
      averageScore: average,
      strengths: topStrengths,
      weaknesses: topWeaknesses,
      profileLabel: label,
    };
  }, [skillValues]);

  return {
    skillValues,
    updateSkill,
    resetSkills,
    averageScore,
    strengths,
    weaknesses,
    profileLabel,
  };
};

