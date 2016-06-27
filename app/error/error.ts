// Classe Error, déclare les attributes et types

// Importe chaque classe pour restreindre l'attribut à son type
import { Article } from '../article/article';
import { Image } from "../image/image";
import { Video } from "../video/video";
import { Documentation } from "../documentation/documentation";

// Assigne les types au attributs
export class Error {
    id: number;
    title: string;
    description: string;
    correction: string;
    intern_code: string;
    accede_code: string;
    target: string;
    documentations: Array<Documentation>;
    article: Article;
    image: Image;
    video: Video;

}
