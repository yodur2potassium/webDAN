// ArticleListComponent, affiche une liste article, assigne l'article à ArticleDetailComponent

// Importe Component pour la déclaration et Input pour recevoir des données depuis le parent
import { Component, Input } from '@angular/core';
// Importe Article et ArticleDetailComponent pour afficher les détails d'un Article
import { Article } from './article';
import { ArticleDetailComponent } from "./article-detail";

// Declaration du composant
@Component({
    // Défini la balise HTML
    selector:'my-article-list',

    // Template HTML effectuant l'affichage, parcours le tableau d'articles et injecte l'article dans my-article-detail
    template: `
      <div *ngFor="let article of articles">
        <my-article-detail [article]="article" [broadcast]="broadcast"></my-article-detail>
      </div>
    `,
    // Déclare la directive ArticleDetail
    directives: [ArticleDetailComponent],

})
export class ArticleListComponent {
    // Attributs du Component avec type, reçoit un tableau d'article du parent et transmet le broadcast
    @Input() articles: Article[];
    @Input() broadcast: string;


}
