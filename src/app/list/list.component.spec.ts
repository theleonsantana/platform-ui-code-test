import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unselected providers', () => {
    it('should have an initial length of 3', () => {
      expect(component.unselectedProviders.length).toEqual(3);
    });

    it('should have an id', () => {
      expect(component.unselectedProviders[0].id).toEqual('1');
    });

    it('should have a name', () => {
      expect(component.unselectedProviders[0].name).toEqual('John');
    });

    it('should have an address', () => {
      expect(component.unselectedProviders[0].address).toEqual('123 Greenway Blvd');
    });

    it('should have a phone', () => {
      expect(component.unselectedProviders[0].phone).toEqual('8991234321');
    });
  });

  describe('selected providers', () => {
    it('should have no initial length', () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
    // it('should add one provider', () => {
    //   let provider = {
    //     id: 1,
    //     name: 'John',
    //     address: '123 Greenway Blvd',
    //     phone: '8991234321'
    //   }
    //   component.saveFavorite(provider);
    //   expect(component.selectedProviders.length).toEqual(1);
    // })
  });
  // describe('setting localStorage', () => {
  //   let providers = JSON.parse(localStorage.getItem('providers'));
  //   // component.ngOnInit()
  //   it('should add providers, to local storage', () => {
  //     expect(providers).toEqual(component.unselectedProviders)
  //   })
  // })  
});