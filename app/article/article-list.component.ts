// ArticleComponent, affiche une liste article, assigne l'article à ArticleDetailComponent

// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component, Input } from '@angular/core';

import { Article } from './article';
import { ArticleDetailComponent } from "./article-detail";


@Component({
    // Défini la balise HTML custom
    selector:'my-article-list',

    // Template HTML effectuant l'affichage, parcours le tableau d'articles et injecte l'article dans my-article-detail
    template: `
      <div *ngFor="let article of articles">
        <!--<p>Test de propagation ArticleList : {{broadcast}}</p>-->
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
