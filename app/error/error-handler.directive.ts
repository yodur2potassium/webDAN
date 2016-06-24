import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChange } from "@angular/core";

@Directive ({
  selector: '[myErrorHandler]'
})

export class ErrorHandlerDirective implements OnChanges {
  private _selectedBorder = "3px solid rgb(255, 0, 0)";
  private _selectedShadow = "1px 1px 12px rgb(255, 0, 0)";
  private _displayedBorder = "3px solid rgb(252,166,38)";
  private _displayedShadow = "1px 1px 12px rgb(252,166,38)";
  private el: HTMLElement;
  @Input() isDisplayed: number = 0;

  constructor(el: ElementRef) { this.el = el.nativeElement; }

   ngOnChanges (changes: {[isDisplayed: number]: SimpleChange}){
     for (let propName in changes) {
       let chng = changes[propName];
       let cur  = chng.currentValue;
       let prev = chng.previousValue;
       if( 1 == cur ){
         this.el.style.border = this._displayedBorder;
         this.el.style.boxShadow = this._displayedShadow;
       }
     }
   }

  @HostListener('click') onClick(){
    this.el.style.border = this._selectedBorder;
    this.el.style.boxShadow = this._selectedShadow;
  }

}
