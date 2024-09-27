import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService, ObjectApiService} from "@kwyxyz/ngx-request";
import {apiRoutes} from "../_utils/apiRoutes";
import { VirtualPhoneNumber } from "../_interfaces/virtual-phone-number";


@Injectable({
  providedIn: 'root'
})
export class VirtualPhoneNumberApiService extends BaseApiService {
  override resourcePart = apiRoutes.virtualPhoneNumber

  constructor(http: HttpClient) {
    super(http);
  }

}

@Injectable({
  providedIn: 'root'
})
export class VirtualPhoneNumberService extends ObjectApiService {
  override data: { [indexer: string]: VirtualPhoneNumber } = {}
  override baseName = 'virtualPhoneNumber'
  override objectName = 'VirtualPhoneNumber' // do not edit

  constructor(protected override api: VirtualPhoneNumberApiService) {
    super(api)
  }

}
