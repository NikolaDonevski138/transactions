import {Directive,ElementRef,OnInit, Renderer2, Input} from '@angular/core'
const merchantColors:any = {
    'The Tea Lounge': 'red',
    'Texaco': 'green',
    'Amazon Online Store' : 'blue',
    '7-Eleven': 'yellow',
    'H&M Online Store': 'grey',
    'Jerry Hildreth': 'purple',
    'Lawrence Pearson': 'orange',
    'Whole Foods': 'black',
    'Southern Electric Company': 'teal'
}

@Directive({
    selector: "[itemTransactionBorder]"
})
export class ItemTransactionBorderDirective implements OnInit  {
    @Input() itemTransactionBorder: any;
    constructor(private renderer:Renderer2, private elementRef: ElementRef){
    }

    ngOnInit(){
       const prop = this.itemTransactionBorder 
       let itemBorderColor = undefined
       if(!merchantColors[prop.toString()]) {
            itemBorderColor = 'yellow';
       } else {
           itemBorderColor = merchantColors[prop.toString()]
       }
       this.renderer.setStyle(this.elementRef.nativeElement,'border-left', `10px solid ${itemBorderColor}`)
    }
  
}
