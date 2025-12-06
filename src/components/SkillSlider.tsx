import { Slider } from "@/components/ui/slider";

interface SkillSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  icon: React.ReactNode;
}

const SkillSlider = ({ label, value, onChange, icon }: SkillSliderProps) => {
  return (
    <div className="group rounded-xl border border-border/50 bg-card p-5 shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            {icon}
          </div>
          <span className="font-medium text-foreground">{label}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-2xl font-display font-semibold text-primary">{value}</span>
          <span className="text-sm text-muted-foreground">/10</span>
        </div>
      </div>
      <Slider
        value={[value]}
        onValueChange={(val) => onChange(val[0])}
        min={1}
        max={10}
        step={1}
        className="w-full"
      />
    </div>
  );
};

export default SkillSlider;
