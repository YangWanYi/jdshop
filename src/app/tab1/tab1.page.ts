import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public slideList: any[] = [];
  public hotList: any[] = [];
  public pList: any[] = [];
  public hotListWidth: any = '400px';
  @ViewChild('theSlide', { static: true }) theSlide: any;
  slideOpts = {
    initialSlide: 0,
    loop: true,
    speed: 400,
    autoplay: {
      delay: 5000,
    },
  };
  constructor() {
    console.log(this.theSlide);
    for (let index = 1; index < 4; index++) {
      this.slideList.push(`assets/slide0${index}.png`);
    }
    for (let index = 1; index < 10; index++) {
      this.hotList.push({
        src: `assets/0${index}.jpg`,
        title: `第${index}个`
      });
    }
    this.hotListWidth = this.hotList.length * 9 + 'rem';
    for (let index = 1; index < 13; index++) {
      this.pList.push({
        src: `assets/list${index}.jpg`,
        title: `第${index}个`
      });
    }
  }

  slideTouchEnd() {
    console.log(this.theSlide);
    this.theSlide.startAutoplay();
  }

}
