import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface Product {
  amount: number
  image: string
  details: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/products";
  url_women = "http://localhost:3000/women_products";
  url_home = "http://localhost:3000/home_products";
  url_men = "http://localhost:3000/men_products";
  url_focus = "http://localhost:3000/focus_products";
  url_clild = "http://localhost:3000/chlid_products";
  url_workStyle = "http://localhost:3000/work_style_products";


  getProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.url));
  }

  getWomenProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.url_women));
  }

  getHomeProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.url_home));
  }

  getMenProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.url_men));
  }

  getFocusProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.url_focus));
  }

  getChildProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.url_clild))
  }

  getWorkStyleProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.url_workStyle));
  }

}
