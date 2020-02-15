import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  emailList = ["anshulr506@gmail.com","anshul.anshul.rawat@gmail.com"];
  onEmailAdded(email:string){
    this.emailList.push(email);
  }
  onEmailDeleted(i:number){
    this.emailList.splice(i,1);
  }

  onLastEmailDeleted(){
    this.emailList.pop();
  }
}
