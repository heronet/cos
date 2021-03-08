import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/Club';
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  clubs: Club[] = [
    { name: 'ICT Club', imgSrc: "../../../assets/images/clubs/ict.png", leader: "Imrul Kayes", leader_avatar: "", description: "This is the ICT Club. A club for IT Enthusiasts. One must have the credibility to prove themselves usefeul to be eligible for joining this club." },
    { name: 'English Club', imgSrc: "../../../assets/images/clubs/english.jpg", leader: "Zahangir Alam", leader_avatar: "", description: "This is the English Language Club. A club for IT Enthusiasts. One must have the credibility to prove themselves usefeul to be eligible for joining this club." },
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
