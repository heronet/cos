import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventPicture } from 'src/app/models/EventPicture';
import { Events } from 'src/app/models/Events';
import { FlowComponent } from './flow/flow.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pictures: EventPicture[] = [
    {imageSrc: "../../../assets/images/gallery/1.jpg" },
    {imageSrc: "../../../assets/images/gallery/2.jpg" },
  ]
  events: Events[] = [
    { name: "Annual Fest", pictures: this.pictures, "description": "Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem  " },
    { name: "Event Two", pictures: this.pictures , "description": "Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem  "},
    { name: "Event Three", pictures: this.pictures, "description": "Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem  " },
    { name: "Event Four", pictures: this.pictures, "description": "Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem Annual Fest lorem  " },
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(index: number) {  
    const dialogRef = this.dialog.open(FlowComponent, {
      panelClass: 'custom-dialog-container',
      data: this.events[index].pictures
    });
  }

}
