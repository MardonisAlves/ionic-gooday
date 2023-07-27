import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private animation: Animation | undefined;
  @ViewChild('img', { read: ElementRef }) img: ElementRef<HTMLIonCardElement> | any;
  constructor(
    private animationCtrl: AnimationController,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.img.nativeElement)
      .duration(4000)
      .fromTo('opacity', '0', '1');

      this.animation.play();

      this.animation.onFinish(() => {
        this.router.navigateByUrl("/well");
      });
  }
}
