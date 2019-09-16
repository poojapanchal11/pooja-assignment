import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = [
    {
      cat: "category",
      category1: "sporting goods", category2: "sporting goods", category3: "sporting goods",category4: "electronics", category5: "electronics", category6: "electronics",
      price: "price", pri1: "$49.99",   pri2: "$9.99",   pri3: "$99.99",pri4: "$149.99",   pri5: "$399.99",   pri6: "$499.99",
      name: "name", nam1: "football", nam2: "baseball", nam3: "basketball",nam4: "i-phone", nam5: "i-pad", nam6: "i-mac",
      stock: "stock", st1: "true" , st2: "false",  st3: "true",st4: "true" , st5: "false",  st6: "true"
    },




  ]
 
};
