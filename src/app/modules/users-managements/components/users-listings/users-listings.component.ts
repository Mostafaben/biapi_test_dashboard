import { Component, OnInit } from "@angular/core";
import { UsersManagementsService } from "src/app/shared/services/users-managements.service";
import IUser from "src/app/shared/interfaces/user";
import { UIService } from "src/app/shared/services/ui.service";
import { CSVService } from "src/app/shared/services/csv.service";

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
  public ORDER_ATTRIBUTES: string[] = ["firstName", "lastName"];
  public selectedOrderListBy: number = 0;
  public currentPage: number = 0;
  public usersList: IUser[] = [];
  public isFetchingData: boolean = true;
  public totalPages: number = 0;

  constructor(
    private _usersManagementsService: UsersManagementsService,
    private _uiService: UIService,
    private _CSVService: CSVService
  ) {}

  ngOnInit(): void {
    this.fetchUsersData();
  }

  handleChangeView() {
    this.isGridView = !this.isGridView;
  }

  /**
   * @note this API does not have the search filter build in to in
   * so i am going to simulate search by getting the hole data
   * and then filtering the result
   */
  handleSearchInputChange() {
    if (this.searchInputValue.length == 0) {
      this.fetchUsersData();
    }
  }
  handleSearchInputEnter() {
    this.filterUsersList(this.searchInputValue);
  }

  handleOrderByChange() {
    this.orderUsersListByAttribute(
      this.ORDER_ATTRIBUTES[this.selectedOrderListBy]
    );
  }

  handleChangePageSize() {
    this.currentPage = 0;
    this.fetchUsersData();
  }

  /**
   * @param direction {NUMBER} if positive than next page
   * else previous page
   */
  changePage(direction: number) {
    if (direction > 0) {
      this.currentPage++;
    } else {
      if (this.currentPage == 0) return;
      this.currentPage--;
    }
    this.fetchUsersData();
  }

  orderUsersListByAttribute(attribute: string) {
    this.usersList.sort((a: IUser | any, b: IUser | any) => {
      let name1 = a[attribute];
      let name2 = b[attribute];
      return name1 > name2 ? 1 : -1;
    });
  }
  /**
   * @param filter {STRING}
   * filter users list according to the search input value
   * added lowercase to insure the match
   */
  filterUsersList(filter: string) {
    this.usersList = this.usersList.filter(user => {
      return (
        user.firstName
          .toLowerCase()
          .match(this.searchInputValue.toLowerCase()) ||
        user.lastName.toLowerCase().match(this.searchInputValue.toLowerCase())
      );
    });
  }

  fetchUsersData() {
    this.isFetchingData = true;
    const loadingDialog = this._uiService.openLoadingDialog();
    this._usersManagementsService
      .fetchUsersList(
        this.currentPage,
        this.LIST_ITEM_SIZES[this.selectedListPageSize]
      )
      .then(
        (response: {
          data: IUser[];
          limit: number;
          page: number;
          total: number;
        }) => {
          this.totalPages = Math.ceil(
            response.total / this.LIST_ITEM_SIZES[this.selectedListPageSize]
          );
          this.usersList = response.data;
          // order list by selected attribute
          this.orderUsersListByAttribute(
            this.ORDER_ATTRIBUTES[this.selectedOrderListBy]
          );
        }
      )
      .catch(error => {})
      .finally(() => {
        this.isFetchingData = false;
        loadingDialog.close();
      });
  }

  handleDownloadData() {
    const confirmDialog = this._uiService.openConfirmDialog();
    confirmDialog.afterClosed().toPromise().then(data => {
      if (data) this._CSVService.exportDataAsCSV(this.usersList);
    });
  }
}
