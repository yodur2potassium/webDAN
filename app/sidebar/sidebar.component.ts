import { Component, Input } from "@angular/core";

import { Image } from "../image/image";
import { ImageComponent } from "../image/image.component";

@Component ({
  selector: 'my-sidebar',
  template:`
    <div class="col-sm-4" id="colonneDroite">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2 class="panel-title">En bref :</h2>
        </div>
        <div class="panel-body">
          <div *ngFor="let image of images" class="img-side">
            <h4>{{image.description}}</h4>
            <my-image [image]="image"></my-image>
          </div>
        </div>
      </div>
    </div>`,
  directives: [ImageComponent],
})

export class SidebarComponent {
  images = IMAGES;


}

var IMAGES: Image[] = [
  {id: 100, source: "public/images/chereau-2016-2015-anneue-du-rebond.gif", description: "Clin d'oeil", caption: "", errors: []},
  {id: 101, source: "public/images/20pp2016_videomv_legarzic.jpg", description: "En video", caption: "20 projets pur 202...", errors: []},
  {id: 102, source: "public/images/com_forum-301_une.jpg", description: "ForumMag", caption: "ForumMag N°301", errors: []},
]
