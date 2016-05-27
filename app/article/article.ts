// Classe Article, définit les attributs et types acceptés

export class Article {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    author: string;
    created: any;
    images: Array<any>;
    videos: Array<any>;
    errors: Array<any>;
}
