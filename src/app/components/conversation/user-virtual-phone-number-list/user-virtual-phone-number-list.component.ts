import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {UserVirtualPhoneNumber} from "@project-interfaces/user-virtual-phone-number";
import {UserVirtualPhoneNumberService} from "@project-services/user-virtual-phone-number.service";
import {BoxContainer4Component} from "../../../templates/box-container4/box-container4.component";
import {MtxGrid, MtxGridColumn} from "@ng-matero/extensions/grid";
import {dialogStyle1, emptyTableText, UserVirtualPhoneNumberStatus} from "../../../_utils/const";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {
  UserVirtualPhoneNumberCreateComponent
} from "../user-virtual-phone-number-create/user-virtual-phone-number-create.component";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-user-virtual-phone-number-list',
  standalone: true,
  imports: [CommonModule, BoxContainer4Component, MtxGrid, MatButton, TranslateModule],
  templateUrl: './user-virtual-phone-number-list.component.html',
  styleUrls: ['./user-virtual-phone-number-list.component.css']
})
export class UserVirtualPhoneNumberListComponent extends CRUDComponent<UserVirtualPhoneNumber> implements OnInit {
  @Input() hideSubmitButton = false;

  columns: MtxGridColumn[] = [
    {
      header: "Your phone number",
      field: "user_phone_number_detail.phone_number"
    },
    {
      header: "Virtual phone number",
      field: "virtual_phone_number_detail.phone_number"
    },
    {
      header: "Status",
      field: "status",
      formatter: (data: UserVirtualPhoneNumber) => this.getStatusName(data.status)
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
          icon: 'edit',
          tooltip: 'edit',
          color: 'warn',
          click: (element: UserVirtualPhoneNumber) => this.openDialog(element),
        },
        {
          type: 'icon',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          click: (element: UserVirtualPhoneNumber) => this.deleteObject(element.id.toString()),
        },

      ],
    },
  ];
  noResultText = emptyTableText

  constructor(protected userVirtualPhoneNumberService: UserVirtualPhoneNumberService,
              private matDialog: MatDialog) {
    super(userVirtualPhoneNumberService);
  }

  override ngOnInit() {
    super.ngOnInit()
    this.ngOnInitList()
  }


  openDialog(initialObject?: UserVirtualPhoneNumber) {
    this.matDialog.open(
      UserVirtualPhoneNumberCreateComponent,
      {
        ...dialogStyle1,
        data: {
          initialObject
        }
      }
    )
  }

  getStatusName(status: number) {
    const map: {[indexer: number]: string} = {
      [UserVirtualPhoneNumberStatus.is_active]: "Active",
      [UserVirtualPhoneNumberStatus.is_inactive]: "Inactive",
      [UserVirtualPhoneNumberStatus.pending]: "Pending",
    }
    return map[status]
  }
}
