import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../model/media.model';

@Component({
  selector: 'app-display-media',
  templateUrl: './display-media.component.html',
  styleUrls: ['./display-media.component.css']
})
export class DisplayMediaComponent {
  @Input() myMedia: Media[];
  constructor() { }


}
