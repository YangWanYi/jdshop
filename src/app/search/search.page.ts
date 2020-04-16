import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public showSearchTip = false;
  public pList: any[] = [];
  constructor(public navController: NavController) {
    for (let index = 1; index < 13; index++) {
      this.pList.push({
        src: `assets/list${index}.jpg`,
        title: `第${index}个`,
        price: index * 3
      });
    }
  }

  ngOnInit() {
  }


  // 返回上一页
  goBack() {
    this.navController.back();
  }

  // 立即搜索
  doSearch() {
    this.showSearchTip = false;
  }

}
