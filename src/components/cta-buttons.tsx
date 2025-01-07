'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonsProps {
  ctaData: {
    _id: string;
    _createdAt: string;
    title: string | null;
    description: string | null;
    primaryButtonText: string | null;
    primaryButtonLink: string | null;
    secondaryButtonText: string | null;
    secondaryButtonLink: string | null;
    variant: boolean | null;
    activateSecondaryButton: boolean | null;
    showCTA: boolean | null;
  };
}

const CTAButtons = ({ ctaData }: CTAButtonsProps) => {
  if (!ctaData.showCTA) {
    return <></>;
  }
  return (
    <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
      <Button
        className={cn(ctaData.variant && 'w-full sm:w-auto')}
        onClick={() => window.open(ctaData.primaryButtonLink || '')}
        variant="outline"
      >
        {ctaData.primaryButtonText}
      </Button>
      {ctaData.activateSecondaryButton && (
        <Button
          className={cn(ctaData.variant && 'w-full sm:w-auto')}
          onClick={() => window.open(ctaData.secondaryButtonLink || '')}
        >
          {ctaData.secondaryButtonText}
        </Button>
      )}
    </div>
  );
};

export default CTAButtons;