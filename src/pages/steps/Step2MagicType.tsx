
import React from 'react';
import { useWizard } from '../../contexts/WizardContext';
import { magicTypes } from '../../data/wizardData';
import NavigationButtons from '../../components/NavigationButtons';

const Step2MagicType = () => {
  const { bookingDetails, setMagicType } = useWizard();
  
  // Get recommended magic types based on selected subservice
  const recommendedMagicTypes = bookingDetails.subService?.magicTypes || [];
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-cinzel text-center mb-2">
          Choose Your Type of Magic
        </h2>
        <p className="text-center text-wizard-gold/70 max-w-2xl mx-auto">
          {bookingDetails.subService 
            ? `Based on your selection of ${bookingDetails.subService.title}, we recommend ${recommendedMagicTypes.join(', ')}`
            : 'Select the magical discipline most suitable for your needs'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {magicTypes.map((magicType) => {
          const isRecommended = recommendedMagicTypes.includes(magicType.id);
          
          return (
            <div 
              key={magicType.id}
              className={`wizard-card cursor-pointer ${
                bookingDetails.magicType?.id === magicType.id ? 'wizard-card-selected' : ''
              } ${isRecommended ? 'border-wizard-gold/40' : ''}`}
              onClick={() => setMagicType(magicType)}
            >
              <div className="w-full h-40 overflow-hidden rounded mb-4">
                <img 
                  src={magicType.image} 
                  alt={magicType.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl">{magicType.name}</h3>
                {isRecommended && (
                  <span className="text-xs bg-wizard-gold/20 text-wizard-gold px-2 py-1 rounded-full">
                    Recommended
                  </span>
                )}
              </div>
              
              <p className="text-sm text-wizard-gold/70">{magicType.description}</p>
            </div>
          );
        })}
      </div>

      {bookingDetails.magicType && (
        <div className="mt-8 p-4 border border-wizard-gold/30 rounded-lg bg-wizard-dark-alt/30">
          <h4 className="text-wizard-gold mb-2">Selected: {bookingDetails.magicType.name}</h4>
          <p className="text-wizard-gold/70">{bookingDetails.magicType.description}</p>
        </div>
      )}

      <NavigationButtons />
    </div>
  );
};

export default Step2MagicType;
