export interface IProduct {
  id:number
  photo: string;
  type: string;
  special: number
  name: string;
  portion?: string;
  weight?: string;
  volume?: string; // объём
  puffs?: number;
  flavours: string[];
  nicotine: number;
  typeNicotine: string;
  price: number;
  manufacturer?: string;
  type_for_snus_and_pod: number
  favorite: boolean
  cart: boolean
}
