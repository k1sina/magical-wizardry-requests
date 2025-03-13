import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useWizard } from '../contexts/WizardContext';
import { recommendService } from '../data/wizardData';
const SearchInput = () => {
  const [query, setQuery] = useState('');
  const {
    setCategory,
    setSubService,
    setCurrentStep
  } = useWizard();
  const handleSearch = () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a request",
        description: "Describe what magical assistance you're seeking",
        variant: "destructive"
      });
      return;
    }
    const recommendation = recommendService(query);
    if (recommendation.category) {
      setCategory(recommendation.category);
      setSubService(recommendation.subService);
      toast({
        title: "Service Recommended",
        description: `We recommend ${recommendation.category.title}${recommendation.subService ? ` - ${recommendation.subService.title}` : ''}`
      });

      // If we have a specific subservice, go to step 2
      if (recommendation.subService) {
        setCurrentStep(2);
      }
    } else {
      toast({
        title: "No Match Found",
        description: "Please browse our categories or try a different search term",
        variant: "destructive"
      });
    }
  };
  return <div className="w-full max-w-2xl mx-auto relative">
      <div className="flex items-center space-x-2 w-full border border-wizard-gold/30 rounded-full overflow-hidden bg-wizard-dark-alt/60 backdrop-blur">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Describe what is your need..." className="font-cormorant text-lg px-6 py-3 w-full bg-transparent border-none focus:ring-0 focus:outline-none" onKeyDown={e => e.key === 'Enter' && handleSearch()} />
        <button onClick={handleSearch} className="bg-wizard-gold rounded-full font-cinzel text-wizard-dark px-6 py-2 mr-2 hover:bg-wizard-gold-light transition-colors mx-2">
          Find
        </button>
      </div>
      <div className="w-full text-center my-4 flex items-center justify-center">
        <hr className="w-1/3 border-wizard-gold/20" />
        <span className="px-4 text-wizard-gold/60">or</span>
        <hr className="w-1/3 border-wizard-gold/20" />
      </div>
    </div>;
};
export default SearchInput;