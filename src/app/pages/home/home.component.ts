import { Component, OnInit } from '@angular/core';
import { ApiservicesService, Product } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiservicesService) { }

  products: Product[] = [];
  women_products: Product[] = [];
  home_products: Product[] = [];
  men_products: Product[] = [];
  focus_products: Product[] = [];
  clild_products: Product[] = [];
  workStyle_products: Product[] = [];
  text = 'See All'

  async ngOnInit() {
    this.products = await this.api.getProducts();
    this.women_products = await this.api.getWomenProducts();
    this.home_products = await this.api.getHomeProducts();
    this.men_products = await this.api.getMenProducts();
    this.focus_products = await this.api.getFocusProducts();
    this.clild_products = await this.api.getChildProducts();
    this.workStyle_products = await this.api.getWorkStyleProducts();
  }

}
