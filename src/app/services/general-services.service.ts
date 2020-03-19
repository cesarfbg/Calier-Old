import { Injectable } from '@angular/core';
import { ProductList } from '../interfaces/productList.interface';
import { ApplicationList } from '../interfaces/applicationList.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  productlist: ProductList[];

  applicationList: ApplicationList[][] = [
    [
      {
        id: 1,
        title: 'Cárnicos',
        prodList: [
         'Proteina de origen vegetal',
         'Proteina de origen vegetal',
         'Conservantes naturales',
         'Conservantes naturales'
        ],
        icon: 'flaticon-011-chicken'
       },
       {
         id: 2,
         title: 'Lácteos',
         prodList: [
          'Cuajo microbiano',
          'Cuajo enzimático',
          'Conservante de origen natural',
          'Sustituto lácteo'
         ],
         icon: 'flaticon-027-milk'
        },
        {
         id: 3,
         title: 'Panificación',
         prodList: [
          'Proteina de origen vegetal',
          'Proteina de origen vegetal',
          'Conservantes naturales',
          'Conservantes naturales'
         ],
         icon: 'flaticon-012-bread'
        }
    ],
    [
      {
        id: 4,
        title: 'Repostería',
        prodList: [
         'Proteina de origen vegetal',
         'Proteina de origen vegetal',
         'Conservantes naturales',
         'Conservantes naturales'
        ],
        icon: 'flaticon-008-eggs'
       },
       {
        id: 5,
        title: 'Confitería',
        prodList: [
         'Proteina de origen vegetal',
         'Proteina de origen vegetal',
         'Conservantes naturales',
         'Conservantes naturales'
        ],
        icon: 'flaticon-035-snack'
       },
       {
        id: 6,
        title: 'Clean Label',
        prodList: [
         'Proteina de origen vegetal',
         'Proteina de origen vegetal',
         'Conservantes naturales',
         'Conservantes naturales'
        ],
        icon: 'flaticon-030-grapes'
       }
    ]
  ];

  constructor( private http: HttpClient ) {
  }

  getProductList() {
    return this.http.get('https://calier-internacional.firebaseio.com/products.json');
  }

  getApplicationList() {
    return this.applicationList;
  }

}
