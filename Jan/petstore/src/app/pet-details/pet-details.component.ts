import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {pets} from '../pets';
import { iPets } from '../iPets';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet: iPets = {} as iPets;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(){
    alert('Pet added');
    this.cartService.addToCart(this.pet);
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["petId"];
      this.pet = pets[this.id];
    })
  }

}
