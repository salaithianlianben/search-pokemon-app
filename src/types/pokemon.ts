import { Attack } from "./attack";
import { Evaluation } from "./evaluation";

export type Pokemon = {
  id: string;
  number: string;
  name: string;
  weight: { minimum: string; maximum: string };
  height: { minimum: string; maximum: string };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  attacks: Attack;
  evolutions: Evaluation[];
};
