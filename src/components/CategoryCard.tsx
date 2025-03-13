
import React from 'react';
import { MagicCategory } from '../contexts/WizardContext';

type CategoryCardProps = {
  category: MagicCategory;
  isSelected: boolean;
  onSelect: (category: MagicCategory) => void;
};

const CategoryCard = ({ category, isSelected, onSelect }: CategoryCardProps) => {
  return (
    <div 
      className={`wizard-card h-64 cursor-pointer ${isSelected ? 'wizard-card-selected' : ''}`}
      onClick={() => onSelect(category)}
    >
      <div className="w-full h-36 overflow-hidden rounded mb-3">
        <img 
          src={category.image} 
          alt={category.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <h3 className="text-xl mb-1 text-center">{category.title}</h3>
      <p className="text-center text-sm text-wizard-gold/70">{category.subtitle}</p>
    </div>
  );
};

export default CategoryCard;
