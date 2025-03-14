
import React, { useState, useEffect } from 'react';
import { useWizard } from '../../contexts/WizardContext';
import { categories, getSubServicesByCategory } from '../../data/wizardData';
import SearchInput from '../../components/SearchInput';
import CategoryCard from '../../components/CategoryCard';
import SubServiceList from '../../components/SubServiceList';
import NavigationButtons from '../../components/NavigationButtons';

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
        <div className="mt-12">
          <SubServiceList
            services={subServices}
            categoryTitle={bookingDetails.category.title}
            categoryDescription={bookingDetails.category.subtitle}
            categoryImage={bookingDetails.category.image}
            selectedService={bookingDetails.subService}
            onSelectService={setSubService}
          />
        </div>
      )}

      <NavigationButtons showCustomize showCheckout />
    </div>
  );
};

export default Step1Occasion;
