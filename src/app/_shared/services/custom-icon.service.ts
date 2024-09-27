import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomIconService {

  customIcons: { [indexer: string]: string } = {
    facebook: "assets/icons/facebook.svg",
    microsoft: "assets/icons/microsoft.svg",
    twitter: "assets/icons/twitter.svg",
    linkedin: "assets/icons/linkedin.svg",
    google: "assets/icons/google.svg",
    discord: "assets/icons/discord.svg",
    cardiology: "assets/icons/cardiology.svg",
    monitoring: "assets/icons/monitoring.svg",

  };

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.init()
  }

  init(): void {
    for (const key of Object.keys(this.customIcons)) {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.customIcons[key])
      );
    }
  }
}

export enum CustomIcons {
  facebook = "facebook",
  microsoft = "microsoft",
  twitter = "twitter",
  linkedin = "linkedin",
  google = "google",
  discord = "discord",
  instagram_footer = "instagram_footer",
  mobile_payment = "mobile_payment",
  product_available = "product_available",
  basket = "basket",
  product_discount = "product_discount",
  out_of_stock = "out_of_stock",
  unavailable = "unavailable",
  customer_service = "customer_service",
  ultra_fast = "ultra_fast",
  visibility = "visibility",
  incorrect = "incorrect",
  user_icon = "user_icon",
  user_icon_red = "user_icon_red",
  magnifying_glass = "magnifying_glass",
  calendar = "calendar",
  red_basket = "red_basket",
  reliability = "reliability",
}
