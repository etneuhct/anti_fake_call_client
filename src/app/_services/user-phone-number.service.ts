import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService, ObjectApiService} from "@kwyxyz/ngx-request";
import {apiRoutes} from "../_utils/apiRoutes";
import { UserPhoneNumber } from "../_interfaces/user-phone-number";


@Injectable({
  providedIn: 'root'
})
export class UserPhoneNumberApiService extends BaseApiService {
  override resourcePart = apiRoutes.userPhoneNumber

  constructor(http: HttpClient) {
    super(http);
  }

}

@Injectable({
  providedIn: 'root'
})
export class UserPhoneNumberService extends ObjectApiService {
  override data: { [indexer: string]: UserPhoneNumber } = {}
  override baseName = 'userPhoneNumber'
  override objectName = 'UserPhoneNumber' // do not edit

  constructor(protected override api: UserPhoneNumberApiService) {
    super(api)
  }
}
