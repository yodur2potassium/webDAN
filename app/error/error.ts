// Classe Error, déclare les attributes et types

// Importe Article pour restreindre l'attribut article à ce type
import { Article } from '../article/article';

// TODO: Assigner les types au attributs
export class Error {
    id: number;
    title: string;
    description: string;
    correction: string;
    internCode: string;
    accedeCode: string;
    target: string;
    documentation: Array<any>;
    article: Article;
    image: any;
    video: any;
}
