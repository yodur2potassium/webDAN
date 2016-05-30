// Classe Article, définit les attributs et types acceptés
// Importe les classes nécessaires
import { Error } from "../error/error";
import { Image } from "../image/image";

export class Article {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    author: string;
    created: any;
    images: Array<Image>;
    videos: Array<any>;
    errors: Array<Error>;
}
