import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  item = 1;
  isPresent = false;
  //injecting related dependency
  constructor(public service : MainService,public router: Router) { }

  ngOnInit(): void {
    //making cart item empty for the first time
    if(this.service.cartOrder == undefined){
      this.service.cartOrder = [];
    }
    //getting JSON from Product.json
    this.service.getJSON().subscribe(data => {
      this.service.myProducts =  data
  });
  }
  addToCart(id: number){
    //pushing item to the cart array object
    this.service.myProducts.map((data: any)=>{
      let index: any
      if(data.id == id){
        // checking for duplicate objects in the array and preventing it
        this.service.cartOrder?.map((data: any,ind: any)=>{
           if(data.id == id){
            this.isPresent = true;
            index = ind
           }
        })
        if(!this.isPresent){
          //for the first time adding
        this.service.cartOrder.push(data);
        }
      }
    })
  }
  routeToProduct(id: number){
    //routing to single product page
    this.router.navigateByUrl("/product/"+id)
  }
}
