import { Component, OnInit } from '@angular/core';
import { Media } from '../model/media.model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  allMedia: Media[] = [];
  constructor() {
    this.fillDummyMedia();
  }

  fillDummyMedia() {
    this.allMedia.push(new Media("one", "/one.img", "first post" , ['cool', 'fun']));
    this.allMedia.push(new Media("two", "/two.img", "second post" , ['crazy', 'holiday']));
    this.allMedia.push(new Media("three", "/three.img" , "third post", ['nice', 'easy']));
  }
  save(media: Media)
  {
    this.allMedia.push(media);
  }

}
