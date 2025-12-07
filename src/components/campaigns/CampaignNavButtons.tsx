import { Button } from '@/components/ui/button';

interface NavButton {
  label: string;
  targetId: string;
}

interface CampaignNavButtonsProps {
  buttons: NavButton[];
}

const CampaignNavButtons = ({ buttons }: CampaignNavButtonsProps) => {
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant="brand"
          size="lg"
          onClick={() => scrollToSection(button.targetId)}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default CampaignNavButtons;
