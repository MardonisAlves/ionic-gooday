import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class WellcomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


}
