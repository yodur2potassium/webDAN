import { Article } from '../article/article';


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