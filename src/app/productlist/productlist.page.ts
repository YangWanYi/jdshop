import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  @ViewChild('loadMore', { static: true }) loadMore: any;
  public pList: any[] = [];
  public config: any = {};
  public cid: string;
  public page: number;
  public pageSize: number;
  public noMore: boolean;
  public subToolBarList: any[] = [];
  public selectedSubMenuId: number;
  public subMenuSort: string;
  constructor(public navController: NavController, public common: CommonService, public activatedRoute: ActivatedRoute) {
    this.config = this.common.config;
    this.page = 1;
    this.pageSize = 10;
    this.noMore = false;
    this.subToolBarList = [
      {
        id: 1,
        title: '综合',
        field: 'all',
        sort: 1
      },
      {
        id: 2,
        title: '销量',
        field: 'salecount',
        sort: 1
      },
      {
        id: 3,
        title: '价格',
        field: 'price',
        sort: 1
      }
    ];
    this.selectedSubMenuId = this.subToolBarList[0].id;
    this.subMenuSort = this.subToolBarList[0].field + '_' + this.subToolBarList[0].sort;
    this.activatedRoute.queryParams.subscribe((data) => {
      this.cid = data.cid;
    });
  }

  ngOnInit() {
    this.listProduct(null);
  }

  changeSubMenu(item) {
    this.selectedSubMenuId = item.id;
    item.sort = item.sort * -1;
    this.subMenuSort = item.field + '_' + item.sort;
    this.page = 1;
    this.pList = [];
    this.noMore = false;
    this.content.scrollToTop(0);
    console.log(this.loadMore);
    console.log(this.loadMore.disabled);
    this.loadMore.disabled = false;
    console.log(this.loadMore.disabled);
    this.listProduct(null);
  }

  listProduct(event) {
    const url = 'api/plist?cid=' + this.cid + '&page=' + this.page + '&pageSize=' + this.pageSize + '&sort=' + this.subMenuSort;
    console.log(url);
    this.common.ajaxGet(url).then((res: any) => {
      this.pList = this.pList.concat(res.result);
      this.page++;
      // tslint:disable-next-line:no-unused-expression
      event ? event.target.complete() : '';
      if (res.result.length < this.pageSize) {
        // tslint:disable-next-line:no-unused-expression
        event ? event.target.disabled = true : '';
        this.noMore = true;
      }
    });
  }

  goBack() {
    this.navController.back();
  }
}
