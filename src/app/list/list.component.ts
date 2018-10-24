import { Component, OnInit } from '@angular/core';
import { Item } from "../../_modelo/Item";
import { MockItemsService } from "../_services/mock-items.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items: Item[];
  constructor(private service: MockItemsService) {
  	/* this.items = [ 
  	new Item("Comprar A"), 
  	new Item("Comprar B"),
  	new Item("Comprar C")
  	]*/
    this.service.getItems().subscribe(serviceItems => {
      this.items = serviceItems;
    });
  }

  ngOnInit() {
  }

  onRemove(item: Item){
    /*this.items = this.items.filter(it => it != item)*/
    this.service.remove(item).subscribe(serviceItems => {
      this.items = serviceItems; 
    });
  }

}
