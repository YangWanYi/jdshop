import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public lCateList: any[] = [];
  public rCateList: any[] = [];
  constructor() {
    for (let index = 1; index < 19; index++) {
      this.lCateList.push(`类目${index}`);
    }
    for (let index = 1; index < 13; index++) {
      this.rCateList.push({
        src: `assets/list${index}.jpg`,
        title: `第${index}个`
      });
    }
  }

}
