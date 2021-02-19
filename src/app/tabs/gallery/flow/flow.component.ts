import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventPicture } from 'src/app/models/EventPicture';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {
  imageIndex = 0;
  constructor(public dialogRef: MatDialogRef<FlowComponent>, @Inject(MAT_DIALOG_DATA) public data: EventPicture[]) { }

  ngOnInit(): void {
  }
  upOneImg() {
    if(this.imageIndex >= this.data.length - 1) {
      this.imageIndex = 0;
    } else {
      ++this.imageIndex;
    }
  }
  downOneImg() {
    if(this.imageIndex <= 0) {
      this.imageIndex = this.data.length - 1;
    } else {
      --this.imageIndex;
    }
  }

}
