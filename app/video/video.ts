// Classe Video, déclare attributs et types
// Importe classe Error
import { Error } from "../error/error";

export class Video {
  id: number;
  description: string;
  transcritpion: string;
  caption: string;
  source: string;
  errors: Error[];
}
