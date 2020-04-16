import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public config: any = {};
  public lCateList: any[] = [];
  public rCateList: any[] = [];
  public selectedId = '';
  constructor(public navController: NavController, public common: CommonService) {
    this.config = this.common.config;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.listItem();
  }

  listItem() {
    const url = 'api/pcate';
    this.common.ajaxGet(url).then((res: any) => {
      this.lCateList = res.result;
      if (this.lCateList.length > 0) {
        this.listDataByItemId(this.lCateList[0]._id);
      }
    });
  }

  listDataByItemId(itemId) {
    this.selectedId = itemId;
    const url = 'api/pcate?pid=' + itemId;
    this.common.ajaxGet(url).then((res: any) => {
      this.rCateList = res.result;
    });
  }

  // 跳转到搜索页面
  toSearchPage() {
    this.navController.navigateForward('/search');
  }

}
