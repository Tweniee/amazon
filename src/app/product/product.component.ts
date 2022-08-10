import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id : any;
  productDetail: any;
  isPresent = false;  
  item = 1;
  //injecting related dependency
  constructor(public service : MainService,public route : ActivatedRoute) { 
    route.params.subscribe(
      //identifying by url id what item is selected
      params => this.id = params['id']);
  }

  ngOnInit(): void {
    //making the cart array blank for the first time
    if(this.service.cartOrder == undefined){
    this.service.cartOrder =[]
    }
    //getting all data from JSON file
    this.service.getJSON().subscribe(data => {
      this.service.myProducts =  data
      this.service.myProducts.map((data: any)=>{
        if(data.id == this.id){
          //on the base of id selecting the single product 
          this.productDetail = data;
        }
      })
  });
  }

  addToCart(){
    //adding product to the cart
    this.service.myProducts.map((data: any)=>{
      if(data.id == this.id){
        //checking for duplicate item
        this.service.cartOrder?.map((data: any,ind: any)=>{
          if(data.id == this.id){
           this.isPresent = true;
          }
       })
        if(!this.isPresent){
          //for the first time adding
        this.service.cartOrder.push(data);
        this.isPresent = !this.isPresent
        } 
      }
    })
  }
}
