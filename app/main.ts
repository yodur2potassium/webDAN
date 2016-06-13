// Fichier principal, sers à connecter les Components à une plateforme, ici un navigateur...

import { bootstrap } from '@angular/platform-browser-dynamic';

// IMPORTANT! Permets la propagation du service "http" dans les differents Components
import { HTTP_PROVIDERS } from '@angular/http';

// Importe le service Title pour affecter le titre de la page courante
import { Title } from "@angular/platform-browser";


import { AppComponent } from './app.component';

// Connecte mon AppComponent avec le provider http
bootstrap(AppComponent, [HTTP_PROVIDERS, Title]);
