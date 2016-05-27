// Fichier principal, sers à connecter les Components à une plateforme, ici un navigateur...
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// IMPORTANT! Permets la propagation du service "http" dans les differents Components
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
// Connecte mon AppComponent avec le provider http
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map