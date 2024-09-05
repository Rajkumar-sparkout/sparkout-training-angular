import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  public prooductId: any;
  public category: string | any;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe((params)=> {
      this.prooductId = params.get('id');
    });

    this.route.queryParamMap.subscribe((params)=> {
      this.category = params.get('category')
    });
  }

}
