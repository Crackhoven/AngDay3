import { Injectable } from '@angular/core';
import { iPets } from './iPets';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: iPets[] = [];
  constructor() { }

  addToCart(pet: iPets){
    this.items.push(pet);
  }

  getItems(){
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  cartTotal(){
    let tAmount: number = 0;
    for(let val of this.items){
      tAmount = val.price + tAmount;
    }
    return tAmount;
  }
}
