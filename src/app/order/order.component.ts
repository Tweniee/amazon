import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
//injecting related dependency
  constructor(public service: MainService,public router: Router) { }

  ngOnInit(): void {
    //If multiple is undefined show use 1 as multiple
    this.service.cartOrder?.map((data: any,index: any)=>{
      if(data['multiple'] == undefined){
        this.service.cartOrder[index]['multiple'] = 1;
      }
    })
  }
  price(item: number,times: number){
    //calculating the value per item in respect to quantity
    return item * times
  }
  delete(index: number){
    //to delete a specific item from cart
    this.service.cartOrder.splice(index,1)
  }
  totalPrice(){
    //calculate the total price of the cart items
    let total = 0;
    console.log(this.service.cartOrder)
    this.service.cartOrder?.map((data:any)=>{
      let price = Number(data.Price);
      let multiple = (data.multiple == undefined?1:data.multiple)
      total += price * multiple
    })
    //adding ₹50 shipping charges
    return total + 50;
  }
  multiple(value : any){
    //just to solve undefined issue
    if(value == undefined){
      return 1;
    }else{
      return value;
    }
  }
  success(){
    //on checkout click
    if(this.service.cartOrder!=undefined){
    alert('Order Placed SuccessFully')
    this.service.cartOrder =[];
    this.router.navigateByUrl('home');
    }
  }
  dec(ind : any){
    // decrementing specific item quantity
    this.service.cartOrder[ind]['multiple']-=1;
  }
  inc(ind: any){
    // incrementing specific item quantity
    this.service.cartOrder[ind]['multiple']+=1;
  }
}
