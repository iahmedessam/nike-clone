import { Component, OnInit } from "@angular/core";
import { ProductService } from '../product.service';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    constructor(private productService: ProductService) { }

    // Hide Filters from home
    isFilterSectionVisible: boolean = true;

    handleFilterClick() {
        this.isFilterSectionVisible = !this.isFilterSectionVisible;
    }

    // Get Products
    products: any[] = [];

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        });
    }
}

