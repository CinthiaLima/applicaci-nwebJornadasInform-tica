import { Injectable } from '@angular/core';
import { AbstractItemsService } from "./abstract-items.service"
import { Observable } from "rxjs"
import {Item} from "../../_modelo/Item"

@Injectable({
  providedIn: 'root'
})

export class MockItemsService extends AbstractItemsService{

items: Item[];
  constructor() {
  	super();
  	this.items = [ 
  	new Item("Comprar A"), 
  	new Item("Comprar B"),
  	new Item("Comprar C")]
   }

  getItems(): Observable<Item[]>{
  	return new Observable((observable) => {
  		observable.next(this.items);
  		observable.complete();
  	});
  }

  remove(item: Item): Observable<Item[]>{
   this.items = this.items.filter(it => it != item)
  	return new Observable((observable) => {
  		observable.next(this.items);
  		observable.complete();
  	});
   
  }

  addItem(item: Item): Observable<Item[]>{
  this.items.push(item);
    return new Observable ((observable) => {
      observable.next(this.items);
      observable.complete();
    });
   
  }
}
