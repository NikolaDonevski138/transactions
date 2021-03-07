import {Directive,ElementRef,OnInit, Renderer2, Input} from '@angular/core'
const merchantColors:any = {
    'The Tea Lounge': '#12a580',
    'Texaco': '#d51270',
    'Amazon Online Store' : '#c12020',
    '7-Eleven': '#c89616',
    'H&M Online Store': '#e25a2c',
    'Jerry Hildreth': '#1181aa',
    'Lawrence Pearson': '#1180aa',
    'Whole Foods': '#12a580',
    'Southern Electric Company': '#fbbb1b'
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
