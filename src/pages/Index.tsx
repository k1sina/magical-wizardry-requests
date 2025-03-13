
import React, { useState } from 'react';
import Layout from '../components/Layout';
import StepIndicator from '../components/StepIndicator';
import { useWizard } from '../contexts/WizardContext';
import Step1Occasion from './steps/Step1Occasion';
import Step2MagicType from './steps/Step2MagicType';
import Step3PowerLevel from './steps/Step3PowerLevel';
import Step4Scheduling from './steps/Step4Scheduling';
import Step5Summary from './steps/Step5Summary';

const Index = () => {
  const { currentStep } = useWizard();

  // Render the appropriate step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1Occasion />;
      case 2:
        return <Step2MagicType />;
      case 3:
        return <Step3PowerLevel />;
      case 4:
        return <Step4Scheduling />;
      case 5:
        return <Step5Summary />;
      default:
        return <Step1Occasion />;
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <StepIndicator />
        <div className="mt-6">
          {renderStepContent()}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
