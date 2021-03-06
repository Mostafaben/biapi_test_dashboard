import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../dialogs/confirm-dialog/confirm-dialog.component";
import { LoadingDialogComponent } from "../dialogs/loading-dialog/loading-dialog.component";

@Injectable({
  providedIn: "root"
})
export class UIService {
  constructor(private _dialog: MatDialog) {}

  openLoadingDialog() {
    return this._dialog.open(LoadingDialogComponent, {
      disableClose: true
    });
  }

  openConfirmDialog() {
    return this._dialog.open(ConfirmDialogComponent, {
      width: "420px"
    });
  }
}
