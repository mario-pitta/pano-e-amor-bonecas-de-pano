import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doll } from 'src/app/core/models/Doll';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  doll!: Doll;
  constructor(
    private prod: ProductsService,
    private aRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.getProduct(id);
  }


  getProduct(id: number): void {
    this.prod.getDolls().subscribe((res) => {
      this.doll = res.find((p: any) => p.id === id)!;
      console.log('this.doll: ', this.doll);

    });
  }
}
