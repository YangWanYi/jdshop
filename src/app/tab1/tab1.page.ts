import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

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
  public config: any = {};
  @ViewChild('theSlide', { static: true }) theSlide: any;
  slideOpts = {
    initialSlide: 0,
    loop: true,
    speed: 400,
    autoplay: {
      delay: 5000,
    },
  };
  constructor(public navController: NavController, public common: CommonService) {
    this.config = this.common.config;
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.getSlidesList();
    this.getHotList();
    this.getPList();
  }

  // 获取轮播图
  getSlidesList() {
    const url = 'api/focus';
    this.common.ajaxGet(url).then((res: any) => {
      this.slideList = res.result;
    });
  }

  // 获取猜你喜欢
  getHotList() {
    const url = 'api/plist?is_hot=1';
    this.common.ajaxGet(url).then((res: any) => {
      this.hotList = res.result;
      this.hotListWidth = this.hotList.length * 9 + 'rem';
    });
  }

  // 获取商品列表
  getPList() {
    const url = 'api/plist?is_best=1';
    this.common.ajaxGet(url).then((res: any) => {
      this.pList = res.result;
    });
  }

  slideTouchEnd() {
    console.log(this.theSlide);
    this.theSlide.startAutoplay();
  }

  // 跳转到搜索页面
  toSearchPage() {
    this.navController.navigateForward('/search');
  }

}
