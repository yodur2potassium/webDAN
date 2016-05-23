import { Component } from '@angular/core';

@Component({
    selector:'my-article',
    template: `
                <section>
                    <div class="page-header">
                        <h2>Titre de l'article <small>Sous-titre</small></h2>
                    </div>
                    <div>
                    Contenu de l'article\n\
                    </div>
                </section>
`
})
export class ArticleComponent {} 