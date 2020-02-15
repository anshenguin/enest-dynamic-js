import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() email:string;
  @Input() index:number;
  @Output() emitDeletion = new EventEmitter<number>();
  deleteEmailFromList(){
    this.emitDeletion.emit(this.index);
  }

}