import { generateId } from '../utils/generateId';

export const products = [
  { id: generateId(), name: 'product 1', price: 20, description: 'product 1 is amazing' },
  { id: generateId(), name: 'product 2', price: 30, description: 'product 2 is nice' },
  { id: generateId(), name: 'product 3', price: 60, description: 'product 3 is good' },
];
