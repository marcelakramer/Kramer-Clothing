import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl: string = 'http://localhost:5420/orders';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}?${item.key}=${item.value}`);
  }

  //create(order: Order) {
    // @ts-ignore
    //delete order.id;
    //return this.http.post<Order>(`${this.baseUrl}`, order);
  //}

  create(order: Order): Observable<Order> {
    // @ts-ignore
    delete order.id;
    return this.http.post<Order>(this.baseUrl, order, this.httpOptions);
  }


  update(order: Order) {
    return this.http.put<Order>(`${this.baseUrl}?id=${order.id}`, order);
  }

  delete(order: Order) {
    return this.http.delete<Order>(`${this.baseUrl}/${order.id}`);
  }
}
