import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alimentar',
  templateUrl: './alimentar.component.html',
  styleUrls: ['./alimentar.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class AlimentarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
