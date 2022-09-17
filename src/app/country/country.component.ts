import { Component, Input, OnInit } from '@angular/core';
import { country } from '../services/api';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  
// @Input() test: country;
  constructor() { }

  ngOnInit(): void {
  }

}
