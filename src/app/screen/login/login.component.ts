import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class LoginComponent  implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
    this.logger.info('oi voce esta debugando o codigo')
  };
}
