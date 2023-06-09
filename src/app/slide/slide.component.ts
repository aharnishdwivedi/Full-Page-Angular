import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})

export class SlideComponent {
  opened:boolean = true;
  matDialog: any;

  toggle(){
    console.log('dhfvh')
    this.opened = !this.opened;
  }
  openDialog(){
    this.matDialog.open(DialogComponent,{
      width:'350px',
    })

}
}
