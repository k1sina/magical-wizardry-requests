
import React from 'react';
import { SubService } from '../contexts/WizardContext';

type SubServiceListProps = {
  services: SubService[];
  categoryTitle: string;
  categoryDescription: string;
  selectedService: SubService | null;
  onSelectService: (service: SubService) => void;
};

const SubServiceList = ({ 
  services, 
  categoryTitle, 
  categoryDescription,
  selectedService, 
  onSelectService 
}: SubServiceListProps) => {
  return (
    <div className="bg-wizard-dark-alt/30 border border-wizard-gold/20 rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl mb-2">{categoryTitle}</h2>
      <p className="text-wizard-gold/70 mb-6">{categoryDescription}</p>
      
      <div className="space-y-3">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`wizard-list-item cursor-pointer ${
              selectedService?.id === service.id ? 'wizard-list-item-selected' : ''
            }`}
            onClick={() => onSelectService(service)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <span className="text-wizard-gold font-medium">${service.price}</span>
            </div>
            <p className="text-sm text-wizard-gold/70 mt-1">
              ({service.magicTypes.join(', ')} – {service.powerLevel})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubServiceList;
