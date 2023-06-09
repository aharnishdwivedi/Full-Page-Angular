import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'full-page';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(DialogComponent,{
      width:'350px',
    })
  }
}
