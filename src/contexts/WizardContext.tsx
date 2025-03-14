
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

// Define types for our wizard booking process
export type MagicCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  priceRange: string;
};

export type SubService = {
  id: string;
  title: string;
  category: string;
  magicTypes: string[];
  powerLevel: string;
  price: number;
  description: string;
};

export type MagicType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type PowerLevel = {
  id: string;
  name: string;
  description: string;
  image: string;
  multiplier: number;
};

export type ScheduleType = 'on-demand' | 'scheduled';

export type BookingDetails = {
  category: MagicCategory | null;
  subService: SubService | null;
  magicType: MagicType | null;
  powerLevel: PowerLevel | null;
  schedule: {
    type: ScheduleType;
    date: Date | null;
  };
  customRequest: string;
};

type WizardContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  bookingDetails: BookingDetails;
  setCategory: (category: MagicCategory | null) => void;
  setSubService: (service: SubService | null) => void;
  setMagicType: (type: MagicType | null) => void;
  setPowerLevel: (level: PowerLevel | null) => void;
  setScheduleType: (type: ScheduleType) => void;
  setScheduleDate: (date: Date | null) => void;
  setCustomRequest: (request: string) => void;
  calculatePrice: () => number;
  resetBooking: () => void;
};

const defaultBookingDetails: BookingDetails = {
  category: null,
  subService: null,
  magicType: null,
  powerLevel: null,
  schedule: {
    type: 'scheduled',
    date: null,
  },
  customRequest: '',
};

export const WizardContext = createContext<WizardContextType | undefined>(undefined);

export const WizardProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(defaultBookingDetails);

  const setCategory = useCallback((category: MagicCategory | null) => {
    console.log("Setting category in context:", category?.id);
    setBookingDetails(prev => ({ ...prev, category }));
  }, []);

  const setSubService = useCallback((subService: SubService | null) => {
    setBookingDetails(prev => ({ ...prev, subService }));
  }, []);

  const setMagicType = useCallback((magicType: MagicType | null) => {
    setBookingDetails(prev => ({ ...prev, magicType }));
  }, []);

  const setPowerLevel = useCallback((powerLevel: PowerLevel | null) => {
    setBookingDetails(prev => ({ ...prev, powerLevel }));
  }, []);

  const setScheduleType = useCallback((type: ScheduleType) => {
    setBookingDetails(prev => ({
      ...prev,
      schedule: { ...prev.schedule, type },
    }));
  }, []);

  const setScheduleDate = useCallback((date: Date | null) => {
    setBookingDetails(prev => ({
      ...prev,
      schedule: { ...prev.schedule, date },
    }));
  }, []);

  const setCustomRequest = useCallback((request: string) => {
    setBookingDetails(prev => ({ ...prev, customRequest: request }));
  }, []);

  const calculatePrice = useCallback((): number => {
    let basePrice = bookingDetails.subService?.price || 0;
    
    // Apply power level multiplier
    if (bookingDetails.powerLevel) {
      basePrice *= bookingDetails.powerLevel.multiplier;
    }
    
    // Add urgency fee for on-demand
    if (bookingDetails.schedule.type === 'on-demand') {
      basePrice += basePrice * 0.25; // 25% urgency fee
    }
    
    return basePrice;
  }, [bookingDetails]);

  const resetBooking = useCallback(() => {
    setBookingDetails(defaultBookingDetails);
    setCurrentStep(1);
  }, []);

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        bookingDetails,
        setCategory,
        setSubService,
        setMagicType,
        setPowerLevel,
        setScheduleType,
        setScheduleDate,
        setCustomRequest,
        calculatePrice,
        resetBooking,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export const useWizard = () => {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
};
