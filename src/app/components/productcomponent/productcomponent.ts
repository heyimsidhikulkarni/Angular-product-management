import { Component } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-productcomponent',
  imports: [],
  templateUrl: './productcomponent.html',
  styleUrl: './productcomponent.css',
})
export class Productcomponent {
  products:Product[]=[];  
  newProduct:Product={
    name:'',
    price:0
  }
  
}
