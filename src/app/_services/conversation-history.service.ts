import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService, ObjectApiService} from "@kwyxyz/ngx-request";
import {apiRoutes} from "../_utils/apiRoutes";
import { ConversationHistory } from "../_interfaces/conversation-history";


@Injectable({
  providedIn: 'root'
})
export class ConversationHistoryApiService extends BaseApiService {
  override resourcePart = apiRoutes.conversationHistory

  constructor(http: HttpClient) {
    super(http);
  }

}

@Injectable({
  providedIn: 'root'
})
export class ConversationHistoryService extends ObjectApiService {
  override data: { [indexer: string]: ConversationHistory } = {}
  override baseName = 'conversationHistory'
  override objectName = 'ConversationHistory' // do not edit

  constructor(protected override api: ConversationHistoryApiService) {
    super(api)
  }
}
