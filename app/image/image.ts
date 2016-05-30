// Classe Image, déclare attributs et types
// Importe classe Error
import { Error } from "../error/error";

export class Image {
  id: number;
  description: string;
  caption: string;
  source: string;
  errors: Error[];
}
