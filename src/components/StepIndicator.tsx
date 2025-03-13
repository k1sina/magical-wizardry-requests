
import React from 'react';
import { useWizard } from '../contexts/WizardContext';

const steps = [
  { id: 1, name: 'Occasion' },
  { id: 2, name: 'Magic Type' },
  { id: 3, name: 'Power Level' },
  { id: 4, name: 'Scheduling' },
  { id: 5, name: 'Summary' },
];

const StepIndicator = () => {
  const { currentStep, setCurrentStep, bookingDetails } = useWizard();
  
  // Only allow navigation to steps that have prerequisites met
  const canNavigateToStep = (stepId: number) => {
    switch (stepId) {
      case 1:
        return true;
      case 2:
        return !!bookingDetails.category;
      case 3:
        return !!bookingDetails.magicType;
      case 4:
        return !!bookingDetails.powerLevel;
      case 5:
        return !!bookingDetails.schedule.type;
      default:
        return false;
    }
  };

  return (
    <div className="py-6">
      <div className="flex items-center justify-center">
        {steps.map((step, i) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="flex items-center">
              {/* Step circle with number */}
              <div 
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  currentStep === step.id 
                    ? 'border-wizard-gold bg-wizard-gold/20 text-wizard-gold' 
                    : currentStep > step.id 
                      ? 'border-wizard-gold/70 bg-wizard-gold/10 text-wizard-gold/70' 
                      : 'border-wizard-gold/30 text-wizard-gold/50'
                } ${canNavigateToStep(step.id) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                onClick={() => canNavigateToStep(step.id) && setCurrentStep(step.id)}
              >
                {step.id}
              </div>
              
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className={`w-16 h-0.5 ${
                  currentStep > step.id ? 'bg-wizard-gold/70' : 'bg-wizard-gold/20'
                }`} />
              )}
            </div>
            
            {/* Step name - positioned below the circle */}
            <div className="mt-3 text-xs md:text-sm font-cinzel text-wizard-gold/70 w-20 text-center">
              {step.name}
            </div>
          </div>
        ))}
      </div>
      {/* Add extra space below the step indicators to prevent overlap with content */}
      <div className="h-10"></div>
    </div>
  );
};

export default StepIndicator;
