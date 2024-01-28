import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent {
  // Categories Dynamic Data
  categories: string[] = ["Shoes", "Tops & T-Shirts", "Shorts", "Hoodies & Pullovers", "Pants & Tights", "Jackets & Vests", "Tracksuits", "Socks", "Accessories & Equipment"]

  // Sections Dynamic Data
  sections: string[] = ['Gender', 'Shop By Price', 'Products & Discount', 'Color', 'Material', 'Brand', 'Sports & Activity', 'Best For']

  // Gender Dynamic Data 
  gender: string[] = ["Men", "Women", "Unisex"]

  // Price Dynamic Data
  prices: string[] = ["$0 - $25", "$25 - $50", "$50 - $100", "$100 - $150"]
  pricesMore: string[] = ["Over $150"]

  // Discounts Dynamic Data
  discounts: string[] = ["40% Off and up", "30% Off and up", "20% Off and up"]

  // Colors Dynamic Data
  colors: string[] = ["Purple", "Black", "Red", "Orange", "Blue", "White", "Brown", "Green", "Yellow", "Multi", "Grey", "Pink"]

  // Material Dynamic Data
  materials: string[] = ["Fleece", "Tech Fleece", "Sustainable Materials"]

  // Brand Dynamic Data
  brands: string[] = ["Nike Sportswear", "NikeLab"]

  // Sports & Activity Dynamic Data 
  sports: string[] = ["LifeStyle", "Running", "Yoga", "Training & Gym"]
  sportsMore: string[] = ["BasketBall", "FootBall", "Soccer", "BaseBall", "Golf", "Tennis", "Track & Field", "Lacrosse", "Walking", "VolleyBall", "Hiking", "Dancing", "Cheerleading", "Cycling"]

  // Best for Dynamic Data
  best: string[] = ["Wet Weather Condition", "Cold Conditions"]

  // Section object
  isOpenGender: boolean = true
  isOpenShopByPrice: boolean = true
  isOpenProductsDiscount: boolean = true
  isOpenColor: boolean = true
  isOpenMaterial: boolean = true
  isOpenBrand: boolean = true
  isOpenSportsActivity: boolean = true
  isOpenBestFor: boolean = true

  handleOpen(section: string) {
    switch (section) {
      case 'gender':
        this.isOpenGender = !this.isOpenGender
        break;
      case 'shopByPrice':
        this.isOpenShopByPrice = !this.isOpenShopByPrice
        break;
      case 'productsDiscount':
        this.isOpenProductsDiscount = !this.isOpenProductsDiscount
        break;
      case 'color':
        this.isOpenColor = !this.isOpenColor
        break;
      case 'material':
        this.isOpenMaterial = !this.isOpenMaterial
        break;
      case 'brand':
        this.isOpenBrand = !this.isOpenBrand
        break;
      case 'sportsActivity':
        this.isOpenSportsActivity = !this.isOpenSportsActivity
        break;
      case 'bestFor':
        this.isOpenBestFor = !this.isOpenBestFor
        break;
    }
  }

  // Handle More Sports
  pricesMoreOpen: boolean = false

  handleMorePrices() {
    this.pricesMoreOpen = !this.pricesMoreOpen
  }

  handleLessPrices() {
    this.pricesMoreOpen = !this.pricesMoreOpen
  }

  // Handle More Sports
  sportsMoreOpen: boolean = false

  handleMoreSports() {
    this.sportsMoreOpen = !this.sportsMoreOpen
  }

  handleLessSports() {
    this.sportsMoreOpen = !this.sportsMoreOpen
  }

  // Hide Filters from home
  isFilterSectionVisible: boolean = true;

  handleFilterClick() {
    this.isFilterSectionVisible = !this.isFilterSectionVisible;
  }
}
