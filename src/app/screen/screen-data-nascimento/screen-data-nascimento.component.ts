import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-screen-data-nascimento',
  templateUrl: './screen-data-nascimento.component.html',
  styleUrls: ['./screen-data-nascimento.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ScreenDataNascimentoComponent  implements OnInit {
  dataNascimento:number = Date.now();
  constructor() { }

  ngOnInit() {}

}
