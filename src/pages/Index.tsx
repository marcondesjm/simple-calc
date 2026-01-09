import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      {/* Subtle background gradient */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(32 95% 55% / 0.08) 0%, transparent 50%)"
        }}
      />
      
      <div className="relative">
        <Calculator />
        
        {/* Branding */}
        <p className="text-center mt-6 text-muted-foreground text-sm font-medium tracking-wide">
          Calculadora
        </p>
      </div>
    </div>
  );
};

export default Index;
