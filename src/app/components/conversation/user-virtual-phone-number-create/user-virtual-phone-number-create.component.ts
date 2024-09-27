import {Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {UserVirtualPhoneNumber} from "@project-interfaces/user-virtual-phone-number";
import {UserVirtualPhoneNumberService} from "@project-services/user-virtual-phone-number.service";
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DialogContainer1Component} from "../../../templates/dialog-container1/dialog-container1.component";
import {FormContainer1Component} from "../../../templates/form-container1/form-container1.component";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {TranslateModule} from "@ngx-translate/core";
import {MatInput} from "@angular/material/input";
import {NgxCommonModule} from "@kwyxyz/ngx-common";
import {MatButton} from "@angular/material/button";
import {UserPhoneNumberService} from "@project-services/user-phone-number.service";
import {VirtualPhoneNumberService} from "@project-services/virtual-phone-number.service";
import {VirtualPhoneNumber} from "@project-interfaces/virtual-phone-number";
import {UserPhoneNumber} from "@project-interfaces/user-phone-number";
import {MtxSelect} from "@ng-matero/extensions/select";


@Component({
  selector: 'app-user-virtual-phone-number-create',
  standalone: true,
  imports: [CommonModule, DialogContainer1Component, FormContainer1Component, MatHint, MatError, MatLabel, MatFormField, MatError, MatFormField, MatError, ReactiveFormsModule, TranslateModule, MatInput, NgxCommonModule, MatDialogClose, MatButton, MtxSelect],
  templateUrl: './user-virtual-phone-number-create.component.html',
  styleUrls: ['./user-virtual-phone-number-create.component.css']
})
export class UserVirtualPhoneNumberCreateComponent extends CRUDComponent<UserVirtualPhoneNumber> implements OnInit {
  @Input() hideSubmitButton = false;
  readonly data = inject<any>(MAT_DIALOG_DATA);
  virtualPhoneNumbers: VirtualPhoneNumber[] = []
  userPhoneNumbers: UserPhoneNumber[] = []

  constructor(protected userVirtualPhoneNumberService: UserVirtualPhoneNumberService,
              private virtualPhoneNumberService: VirtualPhoneNumberService,
              private matDialogRef: MatDialogRef<UserVirtualPhoneNumberCreateComponent>,
              private userPhoneNumberService: UserPhoneNumberService
  ) {
    super(userVirtualPhoneNumberService);

    if (this.data) {
      this.inputInitialObject = this.data.initialObject
    }
  }

  override ngOnInit() {
    super.ngOnInit()
    this.ngOnInitList()
    this.ngOnInitUpdate()

    this.virtualPhoneNumberService.listObject(null, true).subscribe(
      response => {
        if (response.isOk) {
          this.virtualPhoneNumbers = response.body
        }
      }
    )
    this.userPhoneNumberService.getObjectBehaviorSubject().subscribe(
      x => {
        if (x) {
          this.userPhoneNumbers = x.filter((u: UserPhoneNumber) => u.verified)
        }
      }
    )
  }


  override getCreateForm(): FormGroup {
    return this.formBuilder.group({
      virtual_phone_number: [null, [Validators.required]],
      user_phone_number: [null, [Validators.required]],
    });
  }

  override getUpdateForm(): FormGroup {
    return this.formBuilder.group({
      user_phone_number: [null, [Validators.required]],
    });
  }

  override onCreationSucceed(result: any) {
    super.onCreationSucceed(result);
    this.matDialogRef.close(result.id)

  }

  override onSuccessPatchObject(objectId: string, data: any) {
    super.onSuccessPatchObject(objectId, data);
    this.matDialogRef.close(objectId)

  }
}
