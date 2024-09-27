import {Input, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup} from "@angular/forms";
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {Contact} from "@project-interfaces/contact";
import {ContactService} from "@project-services/contact.service";
import {BoxContainer4Component} from "../../../templates/box-container4/box-container4.component";
import {MtxGrid, MtxGridColumn} from "@ng-matero/extensions/grid";
import {emptyTableText} from "../../../_utils/const";


@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, BoxContainer4Component, MtxGrid],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent extends CRUDComponent<Contact> implements OnInit {
  @Input() hideSubmitButton = false;
  columns: MtxGridColumn[] = [
    {
      header: "Phone number",
      field: 'phone_number'
    },
    {
      header: "First name",
      field: 'first_name'
    },
    {
      header: "Last name",
      field: 'last_name'
    }
  ];
  noResultText = emptyTableText

  constructor(protected contactService: ContactService) {
    super(contactService);
  }

  override ngOnInit() {
    super.ngOnInit()
    this.ngOnInitList()
  }


}
