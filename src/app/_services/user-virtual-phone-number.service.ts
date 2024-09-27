import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService, ObjectApiService} from "@kwyxyz/ngx-request";
import {apiRoutes} from "../_utils/apiRoutes";
import { UserVirtualPhoneNumber } from "../_interfaces/user-virtual-phone-number";


@Injectable({
  providedIn: 'root'
})
export class UserVirtualPhoneNumberApiService extends BaseApiService {
  override resourcePart = apiRoutes.userVirtualPhoneNumber

  constructor(http: HttpClient) {
    super(http);
  }

}

@Injectable({
  providedIn: 'root'
})
export class UserVirtualPhoneNumberService extends ObjectApiService {
  override data: { [indexer: string]: UserVirtualPhoneNumber } = {}
  override baseName = 'userVirtualPhoneNumber'
  override objectName = 'UserVirtualPhoneNumber' // do not edit

  constructor(protected override api: UserVirtualPhoneNumberApiService) {
    super(api)
  }
}
