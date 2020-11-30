import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];

  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];
  
  public providers = [];

  constructor() {}

  ngOnInit() {
    // variables for localStorage instances
    let providers = JSON.parse(localStorage.getItem('providers'));
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    // localStorage.clear();
    
    // check if the instances exist, 
    if (!providers && !favorites) {
      // if is not true, then creat the instance in localStorage from the static data
      localStorage.setItem('providers', JSON.stringify(this.unselectedProviders));
    }
    // after check, then assign providers for component to read from localStorage
    this.providers = JSON.parse(localStorage.getItem('providers'));
    // assign favorites from the localStorage, into state
    this.selectedProviders = JSON.parse(localStorage.getItem('favorites'));
  }

  saveFavorite(provider:any):void {
    // find the index of element based on the provider obj that I get from the template
    const index = this.providers.indexOf(provider);
    // check if the index is valid
    if (index > -1) {
      // check if the there is data in the otherwise assign an empty array
      this.selectedProviders = this.selectedProviders || [];
      // add state to the favorites, in the state
      this.selectedProviders.push({
        id: provider.id,
        name: provider.name,
        address: provider.address,
        phone: provider.phone
      });
      // update local storage
      localStorage.setItem('favorites', JSON.stringify(this.selectedProviders));
      console.log(this.selectedProviders.length);
      // remove the item from the general provider's list and update local storage
      this.providers.splice(index, 1);
      localStorage.setItem('providers', JSON.stringify(this.providers));
    }
  }

  removeFavorite(favorite:any):void {
    // find the correct index
    const index = this.selectedProviders.indexOf(favorite);
    // if the number of index is valid then run logic
    if (index > -1) {
      // if the provider's state is empty then assign from proviers, or empty
      this.providers = this.providers || [];
      // add state to providers, basically returning the item from the favorite
      this.providers.push({
        id: favorite.id,
        name: favorite.name,
        address: favorite.address,
        phone: favorite.phone
      });
      // update localStorage
      localStorage.setItem('providers', JSON.stringify(this.providers));
      // remove item from the "favorites list" and update localStorage
      this.selectedProviders.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.selectedProviders));
    }
  }
}
