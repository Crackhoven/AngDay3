import { Component, OnInit } from '@angular/core';
import {pets} from '../pets';
import { iPets } from '../iPets';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets:iPets[]=pets;
  
  constructor() { }

  ngOnInit(): void {
  }

}
