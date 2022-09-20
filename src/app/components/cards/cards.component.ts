import { Component, OnInit,Input } from '@angular/core';
import { Pais } from 'src/app/services/Pais';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  // @Input() tes: string = '';
  @Input() test: Pais;
  constructor() {}
  ngOnInit(): void {}
}
