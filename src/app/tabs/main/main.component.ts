import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  notifications: { title: string, content: string }[] = [
    {title: "শিক্ষার্থীদের অনলাইন ক্লাসে লগইন করার নির্দেশিকা - December 31, 2020 at 9:35 am", content: 'Youtube Link: Online class login procedure'},
    {title: "Online class Routine - January 15, 2020 at 2:10 pm", content: "asdthth"},
    {title: "t-ক্যাশ ও বিকাশে এর মাধ্যমে ছাএ-ছাএীদের টিউশন ফি প্রদানের নির্দেশিকা - October 16, 2019 at 1:36 pm", content: "asdthth"},
  ];
  images: string[] = [
    "../../../assets/images/4.jpg",
    "../../../assets/images/5.jpg"
  ]
  notificationIndex: number = 0;
  imageIndex: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Activate the notification changer
    // SHOULD GO INSIDE HTTP SUBSCRIBE
    this.updateNotifications();
    this.updateImages();
  }
  // This will change the nitification every 5 seconds.
  updateNotifications(): void {
    setInterval(() => {
      if(this.notificationIndex >= this.notifications.length - 1) {
        this.notificationIndex = 0;
      } else if(this.notificationIndex < 0) {
        this.notificationIndex = this.notifications.length - 1;
      } else {
        ++this.notificationIndex;
      }
    }, 5000)
  }
  // Manual notification updates
  upOne() {
    if(this.notificationIndex >= this.notifications.length - 1) {
      this.notificationIndex = 0;
    } else {
      ++this.notificationIndex;
    }
  }
  downOne() {
    if(this.notificationIndex <= 0) {
      this.notificationIndex = this.notifications.length - 1;
    } else {
      --this.notificationIndex;
    }
  }
  // This will change the image every 5 seconds
  updateImages(): void {
    setInterval(() => {
      if(this.imageIndex >= this.images.length - 1) {
        this.imageIndex = 0;
      } else if(this.imageIndex < 0) {
        this.imageIndex = this.images.length - 1;
      } else {
        ++this.imageIndex;
      }
    }, 5000)
  }
  // Manual image updates
  upOneImg() {
    if(this.imageIndex >= this.images.length - 1) {
      this.imageIndex = 0;
    } else {
      ++this.imageIndex;
    }
  }
  downOneImg() {
    if(this.imageIndex <= 0) {
      this.imageIndex = this.images.length - 1;
    } else {
      --this.imageIndex;
    }
  }
}
