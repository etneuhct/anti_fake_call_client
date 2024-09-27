import {Input, Component, OnInit, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {ConversationHistory} from "@project-interfaces/conversation-history";
import {ConversationHistoryService} from "@project-services/conversation-history.service";
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";
import {DialogContainer1Component} from "../../../templates/dialog-container1/dialog-container1.component";
import {FormContainer1Component} from "../../../templates/form-container1/form-container1.component";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgxCommonModule} from "@kwyxyz/ngx-common";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-conversation-history-detail',
  standalone: true,
  imports: [CommonModule, DialogContainer1Component, FormContainer1Component, FormsModule, MatButton, MatDialogClose, MatError, MatFormField, MatHint, MatInput, MatLabel, NgxCommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './conversation-history-detail.component.html',
  styleUrls: ['./conversation-history-detail.component.css']
})
export class ConversationHistoryDetailComponent extends CRUDComponent<ConversationHistory> implements OnInit {
  @Input() hideSubmitButton = false;
  readonly data = inject<any>(MAT_DIALOG_DATA);

  constructor(protected conversationHistoryService: ConversationHistoryService) {
    super(conversationHistoryService);
    this.inputInitialObject = this.data.initialObject
  }

  override ngOnInit() {
    super.ngOnInit()
    this.ngOnInitRetrieve()
  }


}
