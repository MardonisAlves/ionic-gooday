import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class GeneroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
