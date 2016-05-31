// Classe Error, déclare les attributes et types

// Importe Article pour restreindre l'attribut article à ce type
import { Article } from '../article/article';
import { Image } from "../image/image";
import { Video } from "../video/video";
import { Documentation } from "../documentation/documentation";

// TODO: Assigner les types au attributs
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

    getLinkedTo(){
      // if (this.article){
      //   console.log('Article');
      //   return this.article;
      // }else if (this.image){
      //   console.log('Image');
      //   return this.image;
      // }else if (this.video){
      //   console.log('Video');
      //   return this.video;
      // }else {
      //   console.log("Failed, cette Erreur n'est reliée a rien...")
      //   return null;
      // }
      return "plop";
    }
}
