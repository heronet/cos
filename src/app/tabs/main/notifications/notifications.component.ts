import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  @Input() notification: { title: string, content: string };
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {  
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '400px',
      data: this.notification
    });
  }

}
