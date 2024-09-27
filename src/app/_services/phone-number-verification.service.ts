import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService, ObjectApiService} from "@kwyxyz/ngx-request";
import {apiRoutes} from "../_utils/apiRoutes";
import {PhoneNumberVerification} from "../_interfaces/phone-number-verification";


@Injectable({
  providedIn: 'root'
})
export class PhoneNumberVerificationApiService extends BaseApiService {
  override resourcePart = apiRoutes.phoneNumberVerification

  constructor(http: HttpClient) {
    super(http);
  }

}

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberVerificationService extends ObjectApiService {
  override data: { [indexer: string]: PhoneNumberVerification } = {}
  override baseName = 'phoneNumberVerification'
  override objectName = 'PhoneNumberVerification' // do not edit

  constructor(protected override api: PhoneNumberVerificationApiService) {
    super(api)
  }

  override getRequestWhenConstruct() {
    return false
  }

}
