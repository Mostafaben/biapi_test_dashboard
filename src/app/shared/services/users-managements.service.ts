import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersManagementsService {
  private _BASE_URL = "https://dummyapi.io/data/v1/user";
  constructor(private _http: HttpClient) {}

  fetchUsersList(page: number, limit: number): Promise<any> {
    return this._http
      .get(this._BASE_URL, {
        params: {
          page,
          limit
        }
      })
      .toPromise();
  }
}
