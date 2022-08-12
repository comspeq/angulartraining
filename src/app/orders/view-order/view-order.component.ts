import { OrdersService } from 'src/app/orders/Shared/orders.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/orders/Shared/Interface/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orders :Order[] =[];
  constructor(private route:ActivatedRoute,private orderser:OrdersService) { }

  ngOnInit(): void {
    this.orders = this.route.snapshot.data['orders']
  }

  deleteOrder(orderId: number){
    if (!orderId) return
        this.orderser.deleteOrder(orderId).subscribe(res => {
          console.log("Order Header deleted", res, orderId);
          this.orderser.getAllOrders().subscribe(orders => this.orders = orders)
        })
      }
}
