import { MagicCategory, SubService, MagicType, PowerLevel } from '../contexts/WizardContext';

export const categories: MagicCategory[] = [
  {
    id: 'curse-removal',
    title: 'Curse Removal',
    subtitle: 'Lifting negative energy and breaking hexes',
    description: 'Our specialists can detect, analyze, and remove curses of varying intensities, from minor jinxes to ancient familial hexes.',
    image: '/public/magicCategories/curse-removal.jpg',
    priceRange: '$50 - $500'
  },
  {
    id: 'summoning-rituals',
    title: 'Summoning Rituals',
    subtitle: 'Calling supernatural entities or forces',
    description: 'Carefully conducted rituals to summon and communicate with otherworldly entities, spirits, or elemental forces.',
    image: '/public/magicCategories/summoning-rituals.jpg',
    priceRange: '$100 - $1,000'
  },
  {
    id: 'potion-crafting',
    title: 'Potion Crafting',
    subtitle: 'Brewing magical elixirs and concoctions',
    description: 'Custom-crafted potions for healing, enhancement, transformation, or specialized magical effects.',
    image: '/public/magicCategories/potion-crafting.jpg',
    priceRange: '$20 - $300'
  },
  {
    id: 'enchanted-object-repairs',
    title: 'Enchanted Object Repairs',
    subtitle: 'Restoring magical items and artifacts',
    description: 'Professional restoration and repair of enchanted items, from simple charms to ancient powerful artifacts.',
    image: '/public/magicCategories/enchanted-object repairs.jpg',
    priceRange: '$75 - $600'
  },
  {
    id: 'illusions-disguises',
    title: 'Illusions & Disguises',
    subtitle: 'Trickery and perception alteration',
    description: 'Create convincing illusions or alter your appearance temporarily for various purposes.',
    image: '/public/magicCategories/illusions-disguises.jpg',
    priceRange: '$80 - $700'
  },
  {
    id: 'elemental-manipulation',
    title: 'Elemental Manipulation',
    subtitle: 'Controlling natural forces',
    description: 'Harness the power of air, fire, water, and earth for practical purposes or impressive displays.',
    image: '/public/magicCategories/elemental-manipulation.jpg',
    priceRange: '$120 - $1,500'
  },
  {
    id: 'necromancy-assistance',
    title: 'Necromancy Assistance',
    subtitle: 'Communing with spiritual energies',
    description: 'Ethical practices for communicating with departed spirits or harnessing life force energies.',
    image: '/public/magicCategories/necromancy-assistance.jpg',
    priceRange: '$150 - $2,000'
  },
  {
    id: 'divination',
    title: 'Divination & Prophecy',
    subtitle: 'Seeing beyond the veil of time',
    description: 'Glimpse into potential futures, find lost objects, or seek guidance on important decisions.',
    image: '/public/magicCategories/divination.jpg',
    priceRange: '$40 - $500'
  }
];

export const subServices: SubService[] = [
  {
    id: 'minor-curse-removal',
    title: 'Minor Bad Luck Removal',
    category: 'curse-removal',
    magicTypes: ['divination', 'illusion'],
    powerLevel: 'apprentice',
    price: 50,
    description: 'Removal of minor jinxes, hexes, or streaks of bad luck affecting daily life.'
  },
  {
    id: 'medium-hex-dissolution',
    title: 'Medium Hex Dissolution',
    category: 'curse-removal',
    magicTypes: ['divination', 'necromancy'],
    powerLevel: 'master',
    price: 150,
    description: 'Breaking of moderate curses that cause persistent problems or ailments.'
  },
  {
    id: 'major-curse-breaking',
    title: 'Major Curse Breaking',
    category: 'curse-removal',
    magicTypes: ['divination', 'necromancy', 'alchemy'],
    powerLevel: 'archmage',
    price: 500,
    description: 'Complete dissolution of powerful, entrenched curses, including those passed through generations.'
  },
  
  {
    id: 'familiar-summoning',
    title: 'Familiar Summoning',
    category: 'summoning-rituals',
    magicTypes: ['elemental', 'divination'],
    powerLevel: 'apprentice',
    price: 100,
    description: 'Summon a magical familiar to assist with simple tasks and provide companionship.'
  },
  {
    id: 'elemental-conjuring',
    title: 'Elemental Conjuring',
    category: 'summoning-rituals',
    magicTypes: ['elemental', 'transformation'],
    powerLevel: 'master',
    price: 350,
    description: 'Summon and bind elemental entities to perform specific tasks or provide elemental energy.'
  },
  {
    id: 'greater-entity-summoning',
    title: 'Greater Entity Summoning',
    category: 'summoning-rituals',
    magicTypes: ['necromancy', 'divination', 'illusion'],
    powerLevel: 'archmage',
    price: 1000,
    description: 'Summoning of powerful otherworldly entities under strict containment protocols.'
  },
  
  {
    id: 'basic-healing-elixir',
    title: 'Basic Healing Elixir',
    category: 'potion-crafting',
    magicTypes: ['alchemy'],
    powerLevel: 'apprentice',
    price: 20,
    description: 'Simple healing potions for minor injuries, ailments, or fatigue recovery.'
  },
  {
    id: 'truth-serum',
    title: 'Truth Serum',
    category: 'potion-crafting',
    magicTypes: ['alchemy', 'divination'],
    powerLevel: 'master',
    price: 100,
    description: 'Potion that compels the drinker to speak truthfully for a limited time.'
  },
  {
    id: 'transmutation-draught',
    title: 'Transmutation Draught',
    category: 'potion-crafting',
    magicTypes: ['alchemy', 'transformation'],
    powerLevel: 'archmage',
    price: 300,
    description: 'Powerful elixir that can temporarily transform the drinker or alter physical properties of objects.'
  },
  
  {
    id: 'minor-enchantment-rebinding',
    title: 'Minor Enchantment Rebinding',
    category: 'enchanted-object-repairs',
    magicTypes: ['alchemy', 'transformation'],
    powerLevel: 'apprentice',
    price: 75,
    description: 'Repair and rebind simple enchantments on everyday magical items.'
  },
  {
    id: 'artifact-restoration',
    title: 'Artifact Restoration',
    category: 'enchanted-object-repairs',
    magicTypes: ['alchemy', 'divination'],
    powerLevel: 'master',
    price: 250,
    description: 'Restore damaged or degraded magical artifacts to their original condition and power.'
  },
  {
    id: 'ancient-relic-reconstruction',
    title: 'Ancient Relic Reconstruction',
    category: 'enchanted-object-repairs',
    magicTypes: ['alchemy', 'divination', 'necromancy'],
    powerLevel: 'archmage',
    price: 600,
    description: 'Complete reconstruction of ancient or severely damaged magical relics with complex enchantments.'
  },
  
  {
    id: 'temporary-glamour',
    title: 'Temporary Glamour',
    category: 'illusions-disguises',
    magicTypes: ['illusion'],
    powerLevel: 'apprentice',
    price: 80,
    description: 'Simple illusion to alter appearance or create minor sensory deceptions for a short period.'
  },
  {
    id: 'identity-shift-spell',
    title: 'Identity Shift Spell',
    category: 'illusions-disguises',
    magicTypes: ['illusion', 'transformation'],
    powerLevel: 'master',
    price: 250,
    description: 'Complex illusion that creates a complete alternate identity, affecting multiple senses.'
  },
  {
    id: 'full-reality-distortion',
    title: 'Full Reality Distortion',
    category: 'illusions-disguises',
    magicTypes: ['illusion', 'transformation', 'elemental'],
    powerLevel: 'archmage',
    price: 700,
    description: 'Powerful illusion that can alter perception of reality in an area, affecting all senses and even physical interactions.'
  },
  
  {
    id: 'fire-water-control',
    title: 'Fire or Water Control',
    category: 'elemental-manipulation',
    magicTypes: ['elemental'],
    powerLevel: 'apprentice',
    price: 120,
    description: 'Basic manipulation of fire or water elements for practical purposes or entertainment.'
  },
  {
    id: 'storm-calling',
    title: 'Storm Calling',
    category: 'elemental-manipulation',
    magicTypes: ['elemental'],
    powerLevel: 'master',
    price: 600,
    description: 'Summon and control weather patterns including rain, wind, lightning, and thunder.'
  },
  {
    id: 'cataclysmic-force',
    title: 'Cataclysmic Force',
    category: 'elemental-manipulation',
    magicTypes: ['elemental', 'transformation'],
    powerLevel: 'archmage',
    price: 1500,
    description: 'Harness tremendous elemental forces capable of reshaping terrain or creating localized natural phenomena.'
  },
  
  {
    id: 'spirit-communication',
    title: 'Spirit Communication',
    category: 'necromancy-assistance',
    magicTypes: ['necromancy', 'divination'],
    powerLevel: 'apprentice',
    price: 150,
    description: 'Establish temporary communication with spirits for guidance or closure.'
  },
  {
    id: 'temporary-resurrection',
    title: 'Temporary Resurrection',
    category: 'necromancy-assistance',
    magicTypes: ['necromancy', 'alchemy'],
    powerLevel: 'master',
    price: 800,
    description: 'Briefly return a departed spirit to the physical realm for important conversations or unfinished business.'
  },
  {
    id: 'soul-binding',
    title: 'Soul Binding',
    category: 'necromancy-assistance',
    magicTypes: ['necromancy', 'transformation'],
    powerLevel: 'archmage',
    price: 2000,
    description: 'Advanced ritual to bind a willing spirit to an object or location for protective or guidance purposes.'
  },
  
  {
    id: 'tarot-rune-reading',
    title: 'Tarot or Rune Reading',
    category: 'divination',
    magicTypes: ['divination'],
    powerLevel: 'apprentice',
    price: 40,
    description: 'Basic divination reading to provide guidance on current situations or near future events.'
  },
  {
    id: 'personal-fate-revelation',
    title: 'Personal Fate Revelation',
    category: 'divination',
    magicTypes: ['divination', 'illusion'],
    powerLevel: 'master',
    price: 200,
    description: 'Detailed reading of personal fate lines and potential future paths with guidance on critical decision points.'
  },
  {
    id: 'cosmic-prophecy',
    title: 'Cosmic Prophecy',
    category: 'divination',
    magicTypes: ['divination', 'necromancy'],
    powerLevel: 'archmage',
    price: 500,
    description: 'Profound cosmic divination that reveals major life events and their connections to larger universal patterns.'
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

export const recommendService = (query: string): { category: MagicCategory | null, subService: SubService | null } => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('curse') || lowerQuery.includes('hex') || lowerQuery.includes('bad luck')) {
    const category = findCategory('curse-removal');
    let subService = null;
    
    if (lowerQuery.includes('major') || lowerQuery.includes('powerful') || lowerQuery.includes('ancient')) {
      subService = findSubService('major-curse-breaking');
    } else if (lowerQuery.includes('medium') || lowerQuery.includes('moderate')) {
      subService = findSubService('medium-hex-dissolution');
    } else {
      subService = findSubService('minor-curse-removal');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('summon') || lowerQuery.includes('conjure') || lowerQuery.includes('familiar') || lowerQuery.includes('entity')) {
    const category = findCategory('summoning-rituals');
    let subService = null;
    
    if (lowerQuery.includes('greater') || lowerQuery.includes('powerful') || lowerQuery.includes('demon')) {
      subService = findSubService('greater-entity-summoning');
    } else if (lowerQuery.includes('element')) {
      subService = findSubService('elemental-conjuring');
    } else {
      subService = findSubService('familiar-summoning');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('potion') || lowerQuery.includes('elixir') || lowerQuery.includes('healing') || lowerQuery.includes('truth') || lowerQuery.includes('transmutation')) {
    const category = findCategory('potion-crafting');
    let subService = null;
    
    if (lowerQuery.includes('transmut') || lowerQuery.includes('transform')) {
      subService = findSubService('transmutation-draught');
    } else if (lowerQuery.includes('truth')) {
      subService = findSubService('truth-serum');
    } else {
      subService = findSubService('basic-healing-elixir');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('repair') || lowerQuery.includes('restore') || lowerQuery.includes('fix') || lowerQuery.includes('enchant') || lowerQuery.includes('artifact') || lowerQuery.includes('relic')) {
    const category = findCategory('enchanted-object-repairs');
    let subService = null;
    
    if (lowerQuery.includes('ancient') || lowerQuery.includes('relic')) {
      subService = findSubService('ancient-relic-reconstruction');
    } else if (lowerQuery.includes('artifact') || lowerQuery.includes('restore')) {
      subService = findSubService('artifact-restoration');
    } else {
      subService = findSubService('minor-enchantment-rebinding');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('illusion') || lowerQuery.includes('disguise') || lowerQuery.includes('appearance') || lowerQuery.includes('glamour')) {
    const category = findCategory('illusions-disguises');
    let subService = null;
    
    if (lowerQuery.includes('reality') || lowerQuery.includes('distort')) {
      subService = findSubService('full-reality-distortion');
    } else if (lowerQuery.includes('identity') || lowerQuery.includes('shift')) {
      subService = findSubService('identity-shift-spell');
    } else {
      subService = findSubService('temporary-glamour');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('element') || lowerQuery.includes('fire') || lowerQuery.includes('water') || lowerQuery.includes('storm') || lowerQuery.includes('weather')) {
    const category = findCategory('elemental-manipulation');
    let subService = null;
    
    if (lowerQuery.includes('cataclysm') || lowerQuery.includes('force')) {
      subService = findSubService('cataclysmic-force');
    } else if (lowerQuery.includes('storm') || lowerQuery.includes('weather')) {
      subService = findSubService('storm-calling');
    } else {
      subService = findSubService('fire-water-control');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('necromancy') || lowerQuery.includes('spirit') || lowerQuery.includes('soul') || lowerQuery.includes('resurrect')) {
    const category = findCategory('necromancy-assistance');
    let subService = null;
    
    if (lowerQuery.includes('soul') || lowerQuery.includes('bind')) {
      subService = findSubService('soul-binding');
    } else if (lowerQuery.includes('resurrect') || lowerQuery.includes('return')) {
      subService = findSubService('temporary-resurrection');
    } else {
      subService = findSubService('spirit-communication');
    }
    
    return { category: category || null, subService };
  }
  
  if (lowerQuery.includes('divin') || lowerQuery.includes('future') || lowerQuery.includes('fortune') || lowerQuery.includes('prophecy') || lowerQuery.includes('tarot') || lowerQuery.includes('rune')) {
    const category = findCategory('divination');
    let subService = null;
    
    if (lowerQuery.includes('cosmic') || lowerQuery.includes('prophecy')) {
      subService = findSubService('cosmic-prophecy');
    } else if (lowerQuery.includes('fate') || lowerQuery.includes('personal')) {
      subService = findSubService('personal-fate-revelation');
    } else {
      subService = findSubService('tarot-rune-reading');
    }
    
    return { category: category || null, subService };
  }
  
  return { category: null, subService: null };
};
