// Classe Error, déclare les attributes et types
"use strict";
// TODO: Assigner les types au attributs
var Error = (function () {
    function Error() {
    }
    Error.prototype.getLinkedTo = function () {
        // if (this.article){
        //   console.log('Article');
        //   return this.article;
        // }else if (this.image){
        //   console.log('Image');
        //   return this.image;
        // }else if (this.video){
        //   console.log('Video');
        //   return this.video;
        // }else {
        //   console.log("Failed, cette Erreur n'est reliée a rien...")
        //   return null;
        // }
        return "plop";
    };
    return Error;
}());
exports.Error = Error;
//# sourceMappingURL=error.js.map