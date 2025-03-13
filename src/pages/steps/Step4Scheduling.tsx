
import React from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { useWizard } from '../../contexts/WizardContext';
import NavigationButtons from '../../components/NavigationButtons';

const Step4Scheduling = () => {
  const { bookingDetails, setScheduleType, setScheduleDate, calculatePrice } = useWizard();
  
  // Calculate prices
  const regularPrice = calculatePrice();
  const urgentPrice = Math.round(regularPrice * 1.25); // 25% markup for on-demand
  
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-cinzel text-center mb-2">
          Choose Your Timing
        </h2>
        <p className="text-center text-wizard-gold/70 max-w-2xl mx-auto">
          When would you like your magical service to be performed?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* On-Demand Option */}
        <div 
          className={`wizard-card cursor-pointer ${
            bookingDetails.schedule.type === 'on-demand' ? 'wizard-card-selected' : ''
          }`}
          onClick={() => setScheduleType('on-demand')}
        >
          <h3 className="text-xl mb-3">On-Demand Service</h3>
          <p className="text-wizard-gold/70 mb-6">
            Immediate magical assistance with higher priority. Our most powerful wizards will attend to your needs as soon as possible.
          </p>
          
          <div className="mt-auto">
            <p className="text-sm text-wizard-gold/70">Urgency fee applies</p>
            <p className="text-xl font-bold text-wizard-gold mt-2">${urgentPrice}</p>
          </div>
        </div>
        
        {/* Scheduled Option */}
        <div 
          className={`wizard-card cursor-pointer ${
            bookingDetails.schedule.type === 'scheduled' ? 'wizard-card-selected' : ''
          }`}
          onClick={() => setScheduleType('scheduled')}
        >
          <h3 className="text-xl mb-3">Scheduled Service</h3>
          <p className="text-wizard-gold/70 mb-6">
            Plan your magical service in advance for a specific date. Standard priority at our regular rate.
          </p>
          
          <div className="mt-auto">
            <p className="text-sm text-wizard-gold/70">Standard rate</p>
            <p className="text-xl font-bold text-wizard-gold mt-2">${regularPrice}</p>
          </div>
        </div>
      </div>
      
      {/* Date Picker for Scheduled Option */}
      {bookingDetails.schedule.type === 'scheduled' && (
        <div className="mt-8 p-6 border border-wizard-gold/30 rounded-lg bg-wizard-dark-alt/30">
          <h3 className="text-lg text-wizard-gold mb-4">Select a Date</h3>
          
          <div className="flex justify-center bg-wizard-dark p-4 rounded-lg">
            <Calendar
              mode="single"
              selected={bookingDetails.schedule.date || undefined}
              onSelect={(date) => date && setScheduleDate(date)}
              className="p-3 pointer-events-auto bg-wizard-dark rounded-md"
              disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
            />
          </div>
          
          {bookingDetails.schedule.date && (
            <p className="mt-4 text-center text-wizard-gold">
              Selected: {format(bookingDetails.schedule.date, 'PPPP')}
            </p>
          )}
        </div>
      )}

      <NavigationButtons />
    </div>
  );
};

export default Step4Scheduling;
