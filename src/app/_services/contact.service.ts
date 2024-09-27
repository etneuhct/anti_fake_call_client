import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService, ObjectApiService} from "@kwyxyz/ngx-request";
import {apiRoutes} from "../_utils/apiRoutes";
import { Contact } from "../_interfaces/contact";


@Injectable({
  providedIn: 'root'
})
export class ContactApiService extends BaseApiService {
  override resourcePart = apiRoutes.contact

  constructor(http: HttpClient) {
    super(http);
  }

}

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ObjectApiService {
  override data: { [indexer: string]: Contact } = {}
  override baseName = 'contact'
  override objectName = 'Contact' // do not edit

  constructor(protected override api: ContactApiService) {
    super(api)
  }
}
