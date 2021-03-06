import { Component, OnInit } from '@angular/core';
import { CAST } from '../../shared/constants/cast';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  cast: Character[] = CAST;
  selected: Character;
  mockImgs: string[] = [
    './assets/imgs/Volume%201%20Art/Characters/FELICITY%20SMOKE%20R1.jpg',
    './assets/imgs/Volume%201%20Art/Characters/ICHAIVAL%20DARRYL%20R1.jpg',
    './assets/imgs/Volume%201%20Art/Characters/ICHIZEN%20MICHI%20R1.jpg',
    './assets/imgs/Volume%201%20Art/Characters/KISAI%20JIN%20R1.jpg',
    './assets/imgs/Volume%201%20Art/Characters/KYOI%20FENG.jpg',
    './assets/imgs/Volume%201%20Art/Characters/SHAN%20SHIGETZU%20R1.jpg',
    './assets/imgs/Volume%201%20Art/Characters/TOMO%20YUKI%20R1.jpg',
    './assets/imgs/Volume%201%20Art/Characters/YUKA.jpg',
    './assets/imgs/Volume%201%20Art/Characters/ZHA%20TESS%20R1.jpg',
    './assets/imgs/Volume%201%20Art/Characters/ZHUYU%20LONG%20R1.jpg'
  ];
  constructor() { }
  ngOnInit() {
  }
  select(selected) {
    this.selected = selected;
  }
}
