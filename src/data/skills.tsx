import React from "react";
import { 
  MessageCircle, 
  Heart, 
  Crown, 
  Shield, 
  Shuffle, 
  Clock
} from "lucide-react";

export interface Skill {
  id: string;
  label: string;
  icon: React.ReactNode;
  defaultValue: number;
}

export const skills: Skill[] = [
  { 
    id: "communication", 
    label: "Communication", 
    icon: <MessageCircle className="h-5 w-5" />, 
    defaultValue: 7 
  },
  { 
    id: "empathy", 
    label: "Empathy", 
    icon: <Heart className="h-5 w-5" />, 
    defaultValue: 6 
  },
  { 
    id: "leadership", 
    label: "Leadership", 
    icon: <Crown className="h-5 w-5" />, 
    defaultValue: 5 
  },
  { 
    id: "conflictResolution", 
    label: "Conflict Resolution", 
    icon: <Shield className="h-5 w-5" />, 
    defaultValue: 6 
  },
  { 
    id: "adaptability", 
    label: "Adaptability", 
    icon: <Shuffle className="h-5 w-5" />, 
    defaultValue: 7 
  },
  { 
    id: "timeManagement", 
    label: "Time Management", 
    icon: <Clock className="h-5 w-5" />, 
    defaultValue: 5 
  },
];

