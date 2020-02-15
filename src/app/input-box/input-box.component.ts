import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-input-box",
  templateUrl: "./input-box.component.html",
  styleUrls: ["./input-box.component.css"]
})
export class InputBoxComponent implements OnInit {
  @Input() lastEmail: string;
  @Input() emailListLength: number;
  @Output() emitEmail = new EventEmitter<string>();
  @Output() emitLastEmailDeleter = new EventEmitter<any>();
  writtenText: string = "";
  constructor() {}

  ngOnInit() {}

  addEmailToList() {
    this.emitEmail.emit(this.writtenText);
    this.writtenText = "";
  }

  shiftInputBoxUp() {
    if (this.emailListLength !== 1) {
      this.emitLastEmailDeleter.emit();
      this.writtenText = this.lastEmail;
    }
  }
}
