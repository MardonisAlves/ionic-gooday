import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class NameComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
