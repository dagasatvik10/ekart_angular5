import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { DataService } from '../../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ds: DataService,
  ) {}

  ngOnInit() {
    this.products$ = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        return this.ds.getProductsByType(param.get('type'));
      }),
    );
  }
}
