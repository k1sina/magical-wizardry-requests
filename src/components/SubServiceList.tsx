
import React from 'react';
import { SubService } from '../contexts/WizardContext';

type SubServiceListProps = {
  services: SubService[];
  categoryTitle: string;
  categoryDescription: string;
  categoryImage: string;
  selectedService: SubService | null;
  onSelectService: (service: SubService) => void;
};

const SubServiceList = ({ 
  services, 
  categoryTitle, 
  categoryDescription,
  categoryImage,
  selectedService, 
  onSelectService 
}: SubServiceListProps) => {
  if (!services || services.length === 0) {
    return null;
  }
  
  // Create the correct image path by removing '/public' if it exists
  const imagePath = categoryImage.replace('/public', '');

  return (
    <div className="bg-wizard-dark-alt/30 border border-wizard-gold/20 rounded-lg overflow-hidden animate-fade-in mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left column with image */}
        <div className="h-[400px] overflow-hidden">
          <img
            src={imagePath}
            alt={categoryTitle}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right column with service list */}
        <div className="p-6 flex flex-col">
          <h2 className="text-2xl font-cinzel text-wizard-gold mb-2">{categoryTitle}</h2>
          <p className="text-wizard-gold/70 mb-6">{categoryDescription}</p>
          
          <div className="space-y-3 flex-grow">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`border border-wizard-gold/30 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  selectedService?.id === service.id ? 'border-wizard-gold bg-wizard-gold/10' : 'hover:border-wizard-gold/60'
                }`}
                onClick={() => onSelectService(service)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <span className="text-wizard-gold font-medium">${service.price}</span>
                </div>
                <p className="text-sm text-wizard-gold/70 mt-1">
                  ({service.magicTypes.map(type => type.charAt(0).toUpperCase() + type.slice(1)).join(', ')} – {service.powerLevel.charAt(0).toUpperCase() + service.powerLevel.slice(1)})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServiceList;
