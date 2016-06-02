// Component principal, comprends l'intégralité de la page, le CSS etc
// TODO : Injecter le Router pour la navigation entre les differentes pages

import { Component } from '@angular/core';

import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { ErrorListComponent } from "./error/error-list.component";
import { ErrorService } from "./error/error.service";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  // Definis la balise HTML custom
  selector: 'my-app',
  // Charge la template HMTL
  templateUrl: 'app/wip.html',
  // Charge le page de style CSS générale
  styleUrls: ['app/wip.css'],
  // Déclare les directives
  directives: [ArticleComponent, ErrorListComponent, SidebarComponent],
  // Déclare les providers de service de recupération de données API
  providers: [ArticleService, ErrorService],
})
export class AppComponent { }
