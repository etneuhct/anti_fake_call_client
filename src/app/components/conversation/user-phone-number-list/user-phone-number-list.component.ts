import {Input, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup} from "@angular/forms";
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {UserPhoneNumber} from "@project-interfaces/user-phone-number";
import {UserPhoneNumberService} from "@project-services/user-phone-number.service";
import {MtxGrid, MtxGridColumn} from "@ng-matero/extensions/grid";
import {dialogStyle1, emptyTableText} from "../../../_utils/const";
import {BoxContainer4Component} from "../../../templates/box-container4/box-container4.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatDialog} from "@angular/material/dialog";
import {UserPhoneNumberCreateComponent} from "../user-phone-number-create/user-phone-number-create.component";
import {elementAt} from "rxjs";
import {PhoneNumberVerificationService} from "@project-services/phone-number-verification.service";
import {
  PhoneNumberVerificationCreateComponent
} from "../phone-number-verification-create/phone-number-verification-create.component";


@Component({
  selector: 'app-user-phone-number-list',
  standalone: true,
  imports: [CommonModule, BoxContainer4Component, MtxGrid, MatIconModule, MatButton, TranslateModule],
  templateUrl: './user-phone-number-list.component.html',
  styleUrls: ['./user-phone-number-list.component.css']
})
export class UserPhoneNumberListComponent extends CRUDComponent<UserPhoneNumber> implements OnInit {
  @Input() hideSubmitButton = false;
  columns: MtxGridColumn[] = [
    {
      header: "Phone number",
      field: 'phone_number'
    },
    {
      header: "Verified",
      field: 'verified',
      formatter: (data: any) => `<i class="material-icons">${data.verified ? "check_circle" : "cancel"}</i>`,
    },
    {
      header: 'Operation',
      field: 'operation',
      width: '180px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [

        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          click: (element: any) => this.deleteObject(element.id.toString()),
        },
        {
          type: 'icon',
          icon: 'sms',
          tooltip: 'Confirm number',
          color: 'accent',
          iif: (element: any) => !element.verified,
          click: (element: any) => this.confirm(element.id.toString()),
        },
      ],
    },
  ];
  noResultText = emptyTableText

  constructor(protected userPhoneNumberService: UserPhoneNumberService,
              private matDialog: MatDialog,
              private phoneNumberVerificationService: PhoneNumberVerificationService) {
    super(userPhoneNumberService);
  }

  override ngOnInit() {
    super.ngOnInit()
    this.ngOnInitList()
  }


  openDialog() {
    this.matDialog.open(UserPhoneNumberCreateComponent, {
      ...dialogStyle1,
    }).afterClosed().subscribe(
      x => {
        if (x) {
          this.confirm(x)
        }
      }
    )
  }

  private confirm(userPhoneNumberId: string) {
    this.phoneNumberVerificationService.createObject(
      {user_phone_number: userPhoneNumberId}
    ).subscribe(
      x => {
        if (x.isOk) {
          this.matDialog.open(PhoneNumberVerificationCreateComponent, {
            ...dialogStyle1,
            data: {
              initialObject: x.body,
              userPhoneNumberId: userPhoneNumberId
            }
          })
        }
      }
    )
  }
}
