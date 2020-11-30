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
    let providers = JSON.parse(localStorage.getItem('providers'));
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    // localStorage.clear();
    
    if (!providers && !favorites) {
      localStorage.setItem('providers', JSON.stringify(this.unselectedProviders));
    }

    this.providers = JSON.parse(localStorage.getItem('providers'));
    this.selectedProviders = JSON.parse(localStorage.getItem('favorites'));
  }

  saveFavorite(provider) {

    
    const index = this.providers.indexOf(provider);
    
    if (index > -1) {
      this.selectedProviders = this.selectedProviders || [];

      this.selectedProviders.push({
        id: provider.id,
        name: provider.name,
        address: provider.address,
        phone: provider.phone
      });
      
      localStorage.setItem('favorites', JSON.stringify(this.selectedProviders))
      this.providers.splice(index, 1);
      localStorage.setItem('providers', JSON.stringify(this.providers))
    }
  }

  removeFavorite(favorite) {
    const index = this.selectedProviders.indexOf(favorite);
    if (index > -1) {
      this.providers = this.providers || [];

      this.providers.push({
        id: favorite.id,
        name: favorite.name,
        address: favorite.address,
        phone: favorite.phone
      });
      localStorage.setItem('providers', JSON.stringify(this.providers))
      this.selectedProviders.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.selectedProviders))
    }
  }


}
