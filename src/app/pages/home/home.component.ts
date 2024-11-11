import { Observable } from 'rxjs';
import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Doll } from 'src/app/core/models/Doll';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dolls$: Observable<Doll[]> = new Observable();

  constructor(private prod: ProductsService) { }

  ngOnInit(): void {
    this.getDolls();
  }

  getDolls(){
    this.dolls$ = this.prod.getDolls();
  }
}
