// VideoComponent, non utilisée, problème d'insertion d'iframe a résoudre, fonctionne si la vidéo proviens d'une autre
// source, ex youtube...

import { Component, Input } from "@angular/core";

import { Video } from "./video";

@Component ({
  selector: 'my-video',
  template:`
    <figure *ngIf="video" role="group">
      <div class="media_embed" height="240px" width="420px">
        <iframe allowfullscreen="" frameborder="0" height="240px" scrolling="no" src="//videos-dcom.laposte.fr/widget/campagne_octobre_2015" width="420px"></iframe>
      </div>
      <figcaption class="text-center">{{video.caption}}</figcaption>
      <a *ngIf="video.transcription" href={{video.transcription}}>Lien vers la transcription</a>
    </figure>
  `,
})



export class VideoComponent {
  // Reçoit l'objet Video depuis le parent
  @Input() video: Video;
}
