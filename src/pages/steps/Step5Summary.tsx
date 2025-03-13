
import React from 'react';
import { format } from 'date-fns';
import { useWizard } from '../../contexts/WizardContext';
import NavigationButtons from '../../components/NavigationButtons';

const Step5Summary = () => {
  const { bookingDetails, calculatePrice, setCurrentStep } = useWizard();
  
  // Ensure we have the necessary data
  if (!bookingDetails.category) {
    return (
      <div className="text-center py-10">
        <p className="text-wizard-gold/70">
          Please start by selecting a magical service.
        </p>
        <button 
          className="wizard-button mt-4"
          onClick={() => setCurrentStep(1)}
        >
          Go to Step 1
        </button>
      </div>
    );
  }
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-cinzel text-center mb-2">
          Review Your Magical Service
        </h2>
        <p className="text-center text-wizard-gold/70 max-w-2xl mx-auto">
          Confirm the details of your mystical request
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
        {/* Left Column - Large Image */}
        <div className="md:col-span-2">
          <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg border border-wizard-gold/30">
            <img
              src={bookingDetails.category.image}
              alt={bookingDetails.category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wizard-dark to-transparent"></div>
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="text-2xl text-wizard-gold font-bold">
                {bookingDetails.category.title}
              </h3>
              <p className="text-wizard-gold/80">{bookingDetails.category.subtitle}</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Details */}
        <div className="md:col-span-3 space-y-6">
          {/* Service Details Section */}
          <div className="bg-wizard-dark-alt/30 border border-wizard-gold/30 rounded-lg p-6">
            <h3 className="text-xl text-wizard-gold mb-4">Service Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-wizard-gold/70">Category:</span>
                <span className="text-wizard-gold font-medium">{bookingDetails.category.title}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-wizard-gold/70">Specific Service:</span>
                <span className="text-wizard-gold font-medium">
                  {bookingDetails.subService?.title || 'Custom Service'}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-wizard-gold/70">Magic Type:</span>
                <span className="text-wizard-gold font-medium">
                  {bookingDetails.magicType?.name || 'Not specified'}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-wizard-gold/70">Power Level:</span>
                <span className="text-wizard-gold font-medium">
                  {bookingDetails.powerLevel?.name || 'Not specified'}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-wizard-gold/70">Service Time:</span>
                <span className="text-wizard-gold font-medium">
                  {bookingDetails.schedule.type === 'on-demand' 
                    ? 'On-Demand (Higher Priority)' 
                    : bookingDetails.schedule.date 
                      ? `Scheduled: ${format(bookingDetails.schedule.date, 'PPPP')}` 
                      : 'Not scheduled yet'}
                </span>
              </div>
              
              {bookingDetails.customRequest && (
                <div>
                  <span className="text-wizard-gold/70 block mb-1">Custom Request:</span>
                  <p className="text-wizard-gold bg-wizard-dark p-3 rounded">
                    {bookingDetails.customRequest}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Price Summary Section */}
          <div className="bg-wizard-dark-alt/30 border border-wizard-gold/30 rounded-lg p-6">
            <h3 className="text-xl text-wizard-gold mb-4">Price Summary</h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-wizard-gold/70">Base Service:</span>
                <span className="text-wizard-gold">
                  ${bookingDetails.subService?.price || 'Custom pricing'}
                </span>
              </div>
              
              {bookingDetails.powerLevel && (
                <div className="flex justify-between">
                  <span className="text-wizard-gold/70">Power Level Adjustment:</span>
                  <span className="text-wizard-gold">
                    x{bookingDetails.powerLevel.multiplier.toFixed(1)}
                  </span>
                </div>
              )}
              
              {bookingDetails.schedule.type === 'on-demand' && (
                <div className="flex justify-between">
                  <span className="text-wizard-gold/70">Urgency Fee:</span>
                  <span className="text-wizard-gold">+25%</span>
                </div>
              )}
              
              <div className="border-t border-wizard-gold/20 pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span className="text-wizard-gold">Total:</span>
                  <span className="text-2xl text-wizard-gold">${calculatePrice()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Edit Buttons */}
          <div className="flex flex-wrap gap-2">
            <button 
              className="text-sm wizard-button-outline py-1"
              onClick={() => setCurrentStep(1)}
            >
              Edit Service
            </button>
            <button 
              className="text-sm wizard-button-outline py-1"
              onClick={() => setCurrentStep(2)}
            >
              Edit Magic Type
            </button>
            <button 
              className="text-sm wizard-button-outline py-1"
              onClick={() => setCurrentStep(3)}
            >
              Edit Power Level
            </button>
            <button 
              className="text-sm wizard-button-outline py-1"
              onClick={() => setCurrentStep(4)}
            >
              Edit Scheduling
            </button>
          </div>
        </div>
      </div>

      <NavigationButtons />
    </div>
  );
};

export default Step5Summary;
