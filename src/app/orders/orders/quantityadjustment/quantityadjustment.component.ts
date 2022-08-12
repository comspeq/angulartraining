import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantityadjustment',
  templateUrl: './quantityadjustment.component.html',
  styleUrls: ['./quantityadjustment.component.css']
})
export class QuantityadjustmentComponent implements OnInit {

  constructor() { }
  @Input() intValue: number = 0
  @Output() intValueChanged = new EventEmitter<number>();
  
  incr = () => {
    this.intValue++;
    this.intValueChanged.emit(this.intValue)
  }
  decr = () => {
    console.log(this.intValue);
    if (this.intValue === 1) return;  //min to 1
    this.intValue--;
    this.intValueChanged.emit(this.intValue)
  }

  updateValue = (value: string) => 
  {        
    const newVal = Number(value)
    if (newVal < 1) return
    this.intValue = newVal
    this.intValueChanged.emit(this.intValue)    
  }
  
  ngOnInit(): void {
  }
  
}
