import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

  //Sort Dynamic
  isSorted: boolean = false

  sort: string[] = ["Featured", "Newest", "Price: High-Low", "Price: Low-High"]
  
  handleSort() {
    this.isSorted = !this.isSorted
  }

  @Output() filterClicked = new EventEmitter<void>();

  handleFilter() {
    this.filterClicked.emit();
  }

}
