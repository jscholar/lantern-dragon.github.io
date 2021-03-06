import { Component, OnInit, Input } from '@angular/core';
import {SECTIONS} from '../../shared/constants/sections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sections = SECTIONS;
  @Input() selected: string;
  constructor() { }
  ngOnInit() {
  }

}
