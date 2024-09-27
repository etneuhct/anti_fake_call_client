import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {ConversationHistory} from "@project-interfaces/conversation-history";
import {ConversationHistoryService} from "@project-services/conversation-history.service";
import {MtxGrid, MtxGridColumn} from "@ng-matero/extensions/grid";
import {BoxContainer4Component} from "../../../templates/box-container4/box-container4.component";
import {MatButton} from "@angular/material/button";
import {ConversationHistoryCallingStatusText, emptyTableText} from "../../../_utils/const";
import {MatDialog} from "@angular/material/dialog";
import {ConversationHistoryDetailComponent} from "../conversation-history-detail/conversation-history-detail.component";


@Component({
  selector: 'app-conversation-history-list',
  standalone: true,
  imports: [CommonModule, BoxContainer4Component, MatButton, MtxGrid],
  templateUrl: './conversation-history-list.component.html',
  styleUrls: ['./conversation-history-list.component.css']
})
export class ConversationHistoryListComponent extends CRUDComponent<ConversationHistory> implements OnInit {
  @Input() hideSubmitButton = false;

  columns: MtxGridColumn[] = [
    {
      header: "Contact",
      field: "contact_detail.phone_number"
    },
    {
      header: "Virtual phone number",
      field: "user_virtual_phone_number_detail.virtual_phone_number_detail.phone_number"
    },

    {
      header: "Started at",
      field: "started_at",
      type: 'date',
      typeParameter: {
        format: 'yyyy-MM-dd hh:mm',
      },
    },
    {
      header: "Ended at",
      field: "ended_at",
      type: 'date',
      typeParameter: {
        format: 'yyyy-MM-dd hh:mm',
      },
    },

    {
      header: "Analysis status",
      field: "analysis_status",
      formatter: (data: ConversationHistory) => ConversationHistoryCallingStatusText[data.analysis_status]

    },
    {
      header: "Calling status",
      field: "calling_status",
      formatter: (data: ConversationHistory) => ConversationHistoryCallingStatusText[data.calling_status]
    },

    {
      header: 'Operation',
      field: 'operation',
      width: '75px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [

        {
          type: 'icon',
          icon: 'open_in_full',
          tooltip: 'Detail',
          color: 'accent',
          click: (element: any) => this.openDialog(element),
        },
      ],
    },

  ];
  noResultText = emptyTableText

  constructor(protected conversationHistoryService: ConversationHistoryService, private matDialog: MatDialog) {
    super(conversationHistoryService);
  }

  override ngOnInit() {
    super.ngOnInit()
    this.ngOnInitList()
  }


  openDialog(conversationHistory: ConversationHistory) {
    this.matDialog.open(ConversationHistoryDetailComponent, {
      data: {
        initialObject: conversationHistory
      }
    })
  }

}
