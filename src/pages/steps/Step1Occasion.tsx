
import React, { useState, useEffect } from 'react';
import { useWizard } from '../../contexts/WizardContext';
import { categories, getSubServicesByCategory } from '../../data/wizardData';
import SearchInput from '../../components/SearchInput';
import CategoryCard from '../../components/CategoryCard';
import SubServiceList from '../../components/SubServiceList';
import NavigationButtons from '../../components/NavigationButtons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Step1Occasion = () => {
  const { bookingDetails, setCategory, setSubService } = useWizard();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    bookingDetails.category?.id || null
  );
  const [subServices, setSubServices] = useState(
    selectedCategoryId ? getSubServicesByCategory(selectedCategoryId) : []
  );

  // Update subServices when selectedCategoryId changes
  useEffect(() => {
    if (selectedCategoryId) {
      setSubServices(getSubServicesByCategory(selectedCategoryId));
    } else {
      setSubServices([]);
    }
  }, [selectedCategoryId]);

  const handleCategorySelect = (category: typeof categories[0]) => {
    setSelectedCategoryId(category.id);
    setCategory(category);
    // Reset subService selection when changing category
    setSubService(null);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-cinzel text-center mb-2">
          What Magical Assistance Do You Seek?
        </h2>
        <p className="text-center text-wizard-gold/70 max-w-2xl mx-auto">
          Describe your needs or browse our magical services below
        </p>
      </div>

      <SearchInput />

      <div className="mt-12">
        <h3 className="text-xl text-center mb-8">Select the occasion</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={selectedCategoryId === category.id}
              onSelect={handleCategorySelect}
            />
          ))}
        </div>
      </div>

      {selectedCategoryId && bookingDetails.category && (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="relative h-96 overflow-hidden rounded-lg border border-wizard-gold/30">
              <img
                src={bookingDetails.category.image}
                alt={bookingDetails.category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wizard-dark via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-transparent">
              <h2 className="text-2xl font-cinzel text-wizard-gold mb-2">{bookingDetails.category.title}</h2>
              <p className="text-wizard-gold/60 mb-6">{bookingDetails.category.subtitle}</p>
              
              <div className="space-y-3">
                {subServices.map((service) => (
                  <div 
                    key={service.id}
                    className={`border border-wizard-gold/30 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      bookingDetails.subService?.id === service.id ? 'border-wizard-gold/80 bg-wizard-gold/10' : 'hover:border-wizard-gold/60'
                    }`}
                    onClick={() => setSubService(service)}
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
      )}

      <NavigationButtons showCustomize showCheckout />
    </div>
  );
};

export default Step1Occasion;
