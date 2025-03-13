
import { MagicCategory, SubService, MagicType, PowerLevel } from '../contexts/WizardContext';

export const categories: MagicCategory[] = [
  {
    id: 'curse-removal',
    title: 'Curse Removal',
    subtitle: 'Lifting negative energy and breaking hexes',
    description: 'Our specialists can detect, analyze, and remove curses of varying intensities, from minor jinxes to ancient familial hexes.',
    image: '/lovable-uploads/3f3e5ee8-5862-49d7-a3cd-dc904b7bf0c3.png',
    priceRange: '100-500'
  },
  {
    id: 'summoning-rituals',
    title: 'Summoning Rituals',
    subtitle: 'Calling supernatural entities or forces',
    description: 'Carefully conducted rituals to summon and communicate with otherworldly entities, spirits, or elemental forces.',
    image: '/lovable-uploads/4cf9ee77-0204-4b8e-b33d-708ced040870.png',
    priceRange: '200-800'
  },
  {
    id: 'elemental-manipulation',
    title: 'Elemental Manipulation',
    subtitle: 'Controlling natural forces',
    description: 'Harness the power of air, fire, water, and earth for practical purposes or impressive displays.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    priceRange: '150-700'
  },
  {
    id: 'illusions-disguises',
    title: 'Illusions & Disguises',
    subtitle: 'Trickery and perception alteration',
    description: 'Create convincing illusions or alter your appearance temporarily for various purposes.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    priceRange: '120-600'
  },
  {
    id: 'divination',
    title: 'Divination',
    subtitle: 'Seeing beyond the veil of time',
    description: 'Glimpse into potential futures, find lost objects, or seek guidance on important decisions.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    priceRange: '90-450'
  },
  {
    id: 'alchemy',
    title: 'Alchemy',
    subtitle: 'Transformative potions and elixirs',
    description: 'Commission custom potions for healing, enhancement, or transformation.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    priceRange: '200-900'
  }
];

export const subServices: SubService[] = [
  {
    id: 'minor-curse-removal',
    title: 'Minor Bad Luck Removal',
    category: 'curse-removal',
    magicTypes: ['divination', 'illusion'],
    powerLevel: 'apprentice',
    price: 100,
    description: 'Removal of minor jinxes, hexes, or streaks of bad luck affecting daily life.'
  },
  {
    id: 'moderate-curse-removal',
    title: 'Moderate Curse Breaking',
    category: 'curse-removal',
    magicTypes: ['divination', 'necromancy'],
    powerLevel: 'master',
    price: 250,
    description: 'Breaking of moderate curses that cause persistent problems or ailments.'
  },
  {
    id: 'major-curse-removal',
    title: 'Major Familial Curse Dissolution',
    category: 'curse-removal',
    magicTypes: ['divination', 'necromancy', 'alchemy'],
    powerLevel: 'archmage',
    price: 500,
    description: 'Complete dissolution of powerful, entrenched curses, including those passed through generations.'
  },
  {
    id: 'spirit-summoning',
    title: 'Spirit Communication',
    category: 'summoning-rituals',
    magicTypes: ['necromancy', 'divination'],
    powerLevel: 'apprentice',
    price: 200,
    description: 'Temporary summoning of spirits for communication or guidance.'
  },
  {
    id: 'elemental-summoning',
    title: 'Elemental Entity Summoning',
    category: 'summoning-rituals',
    magicTypes: ['elemental', 'transformation'],
    powerLevel: 'master',
    price: 400,
    description: 'Summon and bind elemental entities to perform specific tasks.'
  },
  {
    id: 'demon-summoning',
    title: 'Higher Entity Conjuration',
    category: 'summoning-rituals',
    magicTypes: ['necromancy', 'divination', 'illusion'],
    powerLevel: 'archmage',
    price: 800,
    description: 'Summoning of powerful otherworldly entities under strict containment protocols.'
  },
  {
    id: 'weather-control',
    title: 'Weather Adjustment',
    category: 'elemental-manipulation',
    magicTypes: ['elemental'],
    powerLevel: 'master',
    price: 300,
    description: 'Create localized weather changes for events or agricultural needs.'
  },
  {
    id: 'basic-illusion',
    title: 'Basic Sensory Illusion',
    category: 'illusions-disguises',
    magicTypes: ['illusion'],
    powerLevel: 'apprentice',
    price: 120,
    description: 'Create convincing but simple illusions affecting one or two senses.'
  },
  {
    id: 'fortune-telling',
    title: 'Personal Fortune Reading',
    category: 'divination',
    magicTypes: ['divination'],
    powerLevel: 'apprentice',
    price: 90,
    description: 'Insight into potential future paths and guidance on personal decisions.'
  },
  {
    id: 'healing-potion',
    title: 'Healing Elixir Crafting',
    category: 'alchemy',
    magicTypes: ['alchemy', 'transformation'],
    powerLevel: 'master',
    price: 350,
    description: 'Customized healing potions for specific ailments or recovery needs.'
  }
];

export const magicTypes: MagicType[] = [
  {
    id: 'elemental',
    name: 'Elemental',
    description: 'Magic that manipulates the four primal elements: earth, air, fire, and water.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'necromancy',
    name: 'Necromancy',
    description: 'Magic involving spirits, ghosts, and the essence of life and death.',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'illusion',
    name: 'Illusion',
    description: 'Magic that alters perception and creates convincing deceptions.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alchemy',
    name: 'Alchemy',
    description: 'Magic focused on transformation through potions, elixirs, and material transmutation.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'divination',
    name: 'Divination',
    description: 'Magic that reveals hidden knowledge, glimpses the future, or finds lost things.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'transformation',
    name: 'Transformation',
    description: 'Magic that changes form, function, or essential qualities of beings or objects.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const powerLevels: PowerLevel[] = [
  {
    id: 'apprentice',
    name: 'Apprentice',
    description: 'Entry-level magical services, suitable for minor issues and simple enchantments.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    multiplier: 1.0
  },
  {
    id: 'master',
    name: 'Master',
    description: 'Advanced services by experienced wizards, appropriate for complex magical needs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    multiplier: 1.5
  },
  {
    id: 'archmage',
    name: 'Archmage',
    description: 'Elite services by our most powerful practitioners, for the most demanding magical requirements.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    multiplier: 2.5
  }
];

export const findCategory = (id: string): MagicCategory | undefined => {
  return categories.find(cat => cat.id === id);
};

export const findSubService = (id: string): SubService | undefined => {
  return subServices.find(service => service.id === id);
};

export const getSubServicesByCategory = (categoryId: string): SubService[] => {
  return subServices.filter(service => service.category === categoryId);
};

export const findMagicType = (id: string): MagicType | undefined => {
  return magicTypes.find(type => type.id === id);
};

export const findPowerLevel = (id: string): PowerLevel | undefined => {
  return powerLevels.find(level => level.id === id);
};

// Mock AI function to recommend services based on user input
export const recommendService = (query: string): { category: MagicCategory | null, subService: SubService | null } => {
  const lowerQuery = query.toLowerCase();
  
  // Simple keyword matching
  if (lowerQuery.includes('curse') || lowerQuery.includes('hex') || lowerQuery.includes('bad luck')) {
    const category = findCategory('curse-removal');
    let subService = null;
    
    if (lowerQuery.includes('family') || lowerQuery.includes('generations') || lowerQuery.includes('ancient')) {
      subService = findSubService('major-curse-removal');
    } else if (lowerQuery.includes('moderate') || lowerQuery.includes('persistent')) {
      subService = findSubService('moderate-curse-removal');
    } else {
      subService = findSubService('minor-curse-removal');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('summon') || lowerQuery.includes('spirit') || lowerQuery.includes('entity') || lowerQuery.includes('demon')) {
    const category = findCategory('summoning-rituals');
    let subService = null;
    
    if (lowerQuery.includes('demon') || lowerQuery.includes('powerful')) {
      subService = findSubService('demon-summoning');
    } else if (lowerQuery.includes('element')) {
      subService = findSubService('elemental-summoning');
    } else {
      subService = findSubService('spirit-summoning');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('element') || lowerQuery.includes('weather') || lowerQuery.includes('fire') || lowerQuery.includes('water')) {
    const category = findCategory('elemental-manipulation');
    const subService = findSubService('weather-control');
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('illusion') || lowerQuery.includes('disguise') || lowerQuery.includes('appearance')) {
    const category = findCategory('illusions-disguises');
    const subService = findSubService('basic-illusion');
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('future') || lowerQuery.includes('fortune') || lowerQuery.includes('see') || lowerQuery.includes('predict')) {
    const category = findCategory('divination');
    const subService = findSubService('fortune-telling');
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('potion') || lowerQuery.includes('elixir') || lowerQuery.includes('heal') || lowerQuery.includes('transform')) {
    const category = findCategory('alchemy');
    const subService = findSubService('healing-potion');
    return { category: category || null, subService };
  }
  
  // Default to null if no match
  return { category: null, subService: null };
};
