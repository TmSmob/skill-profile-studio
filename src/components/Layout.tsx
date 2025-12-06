import { Sparkles } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
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
        {children}
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

