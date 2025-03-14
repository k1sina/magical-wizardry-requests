
import React from 'react';
import { useWizard } from '../../contexts/WizardContext';
import { powerLevels } from '../../data/wizardData';
import NavigationButtons from '../../components/NavigationButtons';

const Step3PowerLevel = () => {
  const { bookingDetails, setPowerLevel, calculatePrice } = useWizard();
  
  // Get recommended power level based on selected subservice
  const recommendedPowerLevel = bookingDetails.subService?.powerLevel || '';
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-cinzel text-center mb-2">
          Select Your Power Level
        </h2>
        <p className="text-center text-wizard-gold/70 max-w-2xl mx-auto">
          {bookingDetails.subService 
            ? `Based on your selection of ${bookingDetails.subService.title}, we recommend ${recommendedPowerLevel} level`
            : 'Choose the intensity and expertise level for your magical service'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {powerLevels.map((level) => {
          const isRecommended = level.id === recommendedPowerLevel;
          const estimatedPrice = bookingDetails.subService ? 
            Math.round(bookingDetails.subService.price * level.multiplier) : 
            0;
          
          // Create the correct image path by removing '/public' if it exists
          const imagePath = level.image.replace('/public', '');
          
          return (
            <div 
              key={level.id}
              className={`wizard-card cursor-pointer ${
                bookingDetails.powerLevel?.id === level.id ? 'wizard-card-selected' : ''
              } ${isRecommended ? 'border-wizard-gold/40' : ''}`}
              onClick={() => setPowerLevel(level)}
            >
              <div className="w-full h-40 overflow-hidden rounded mb-4">
                <img 
                  src={imagePath} 
                  alt={level.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl">{level.name}</h3>
                {isRecommended && (
                  <span className="text-xs bg-wizard-gold/20 text-wizard-gold px-2 py-1 rounded-full">
                    Recommended
                  </span>
                )}
              </div>
              
              <p className="text-sm text-wizard-gold/70 mb-3">{level.description}</p>
              
              {bookingDetails.subService && (
                <div className="text-center mt-auto">
                  <span className="text-wizard-gold font-bold">${estimatedPrice}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {bookingDetails.powerLevel && bookingDetails.subService && (
        <div className="mt-8 p-4 border border-wizard-gold/30 rounded-lg bg-wizard-dark-alt/30">
          <div className="flex justify-between items-center">
            <h4 className="text-wizard-gold">Selected: {bookingDetails.powerLevel.name}</h4>
            <span className="text-wizard-gold font-bold text-xl">${calculatePrice()}</span>
          </div>
        </div>
      )}

      <NavigationButtons />
    </div>
  );
};

export default Step3PowerLevel;
