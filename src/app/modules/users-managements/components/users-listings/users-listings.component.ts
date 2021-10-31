import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users-listings",
  templateUrl: "./users-listings.component.html",
  styleUrls: ["./users-listings.component.scss"]
})
export class UsersListingsComponent implements OnInit {
  /**
   * @Note
   * here selected view will change the view from list view to grid view
   * LIST VIEW: false
   * GRID VIEW: true
   * @default GRID_VIEW
   */
  public isGridView: boolean = true;
  public searchInputValue: string = "";
  public LIST_ITEM_SIZES: number[] = [25, 50, 100];
  public selectedListPageSize: number = 0;
  public selectedOrderListBy: number = 0;
  public currentPage: number = 0;

  constructor() {}

  ngOnInit(): void {}

  handleChangeView() {
    this.isGridView = !this.isGridView;
  }

  handleSearchInputChange() {
    console.log(this.searchInputValue);
  }
  handleOrderByChange() {
    console.log(this.selectedOrderListBy);
  }

  /**
   *
   * @param direction {NUMBER} if positive than next page
   * else previous page
   *
   */
  changePage(direction: number) {}
}
