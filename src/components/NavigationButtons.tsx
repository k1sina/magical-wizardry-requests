import React from "react";
import { useWizard } from "../contexts/WizardContext";
import { toast } from "@/hooks/use-toast";

type NavigationButtonsProps = {
  onNext?: () => boolean; // Optional validation function, returns true if valid
  showCustomize?: boolean;
  showCheckout?: boolean;
};

const NavigationButtons = ({
  onNext,
  showCustomize = false,
  showCheckout = false,
}: NavigationButtonsProps) => {
  const { currentStep, setCurrentStep, bookingDetails } = useWizard();

  const handleNext = () => {
    // If validation function provided, check if we can proceed
    if (onNext && !onNext()) {
      return;
    }

    // Basic validation for each step
    if (currentStep === 1 && !bookingDetails.category) {
      toast({
        title: "Selection Required",
        description: "Please select a magical service category",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === 2 && !bookingDetails.magicType) {
      toast({
        title: "Selection Required",
        description: "Please select a type of magic",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === 3 && !bookingDetails.powerLevel) {
      toast({
        title: "Selection Required",
        description: "Please select a power level",
        variant: "destructive",
      });
      return;
    }

    if (
      currentStep === 4 &&
      bookingDetails.schedule.type === "scheduled" &&
      !bookingDetails.schedule.date
    ) {
      toast({
        title: "Date Required",
        description: "Please select a date for your scheduled service",
        variant: "destructive",
      });
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCustomize = () => {
    // Debug logs to see what we have in state
    console.log("Current category in bookingDetails:", bookingDetails.category);

    if (bookingDetails.category) {
      setCurrentStep(2);
    } else {
      toast({
        title: "Selection Required",
        description: "Please select a magical service category first",
        variant: "destructive",
      });
    }
  };

  const handleCheckout = () => {
    // Debug logs
    console.log("Attempting checkout with category:", bookingDetails.category);

    if (!bookingDetails.category) {
      toast({
        title: "Selection Required",
        description: "Please select a magical service category",
        variant: "destructive",
      });
      return;
    }

    // Auto-select defaults if not selected
    if (!bookingDetails.magicType && bookingDetails.subService) {
      // Use the first magic type from the selected subservice
      // (This would be implemented in a real app)
    }

    if (!bookingDetails.powerLevel && bookingDetails.subService) {
      // Use the power level from the selected subservice
      // (This would be implemented in a real app)
    }

    // Go to summary
    setCurrentStep(5);
  };

  return (
    <div className="flex justify-between mt-8">
      <div>
        {currentStep > 1 && (
          <button className="wizard-button-outline" onClick={handleBack}>
            Back
          </button>
        )}
      </div>

      <div className="flex space-x-4">
        {showCustomize && (
          <button className="wizard-button-outline" onClick={handleCustomize}>
            Customize
          </button>
        )}

        {showCheckout && (
          <button className="wizard-button" onClick={handleCheckout}>
            Jump to Checkout
          </button>
        )}

        {!showCheckout && currentStep < 5 && (
          <button className="wizard-button" onClick={handleNext}>
            Next
          </button>
        )}

        {currentStep === 5 && (
          <button
            className="wizard-button"
            onClick={() => {
              toast({
                title: "Service Booked!",
                description:
                  "A wizard will be summoned according to your preferences.",
              });
            }}
          >
            Summon a Wizard!
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;
