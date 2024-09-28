import {AnonymousComponent} from "./pages/base/anonymous/anonymous.component";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./pages/public/landing/landing.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegistrationComponent} from "./components/auth/registration/registration.component";
import {ResetPasswordComponent} from "./components/auth/reset-password/reset-password.component";
import {TermOfServiceComponent} from "./pages/public/term-of-service/term-of-service.component";
import {FaqComponent} from "./pages/public/faq/faq.component";
import {NotFoundComponent} from "./pages/errors/not-found/not-found.component";
import {MaintenanceComponent} from "./pages/errors/maintenance/maintenance.component";
import {LogoutComponent} from "./pages/auth/logout/logout.component";
import {AuthenticatedComponent} from "./pages/base/authenticated/authenticated.component";
import {NgModule} from "@angular/core";
import {ProfileComponent} from "./pages/auth/profile/profile.component";
import {RoutingPart} from "./_utils/const";
import {EditUserProfileComponent} from "./components/auth/edit-user-profile/edit-user-profile.component";
import {ChangePasswordComponent} from "./components/auth/change-password/change-password.component";
import {ConversationComponent} from "./pages/conversation/conversation/conversation.component";
import {
  UserVirtualPhoneNumberComponent
} from "./pages/conversation/user-virtual-phone-number/user-virtual-phone-number.component";
import {UserPhoneNumberComponent} from "./pages/conversation/user-phone-number/user-phone-number.component";
import {ContactComponent} from "./pages/conversation/contact/contact.component";
import {
  ConversationHistoryListComponent
} from "./components/conversation/conversation-history-list/conversation-history-list.component";
import {ContactListComponent} from "./components/conversation/contact-list/contact-list.component";
import {
  UserPhoneNumberListComponent
} from "./components/conversation/user-phone-number-list/user-phone-number-list.component";
import {
  UserVirtualPhoneNumberListComponent
} from "./components/conversation/user-virtual-phone-number-list/user-virtual-phone-number-list.component";
import {AuthGuard} from "@kwyxyz/ngx-auth";

const routes: Routes = [
  {
    path: '', component: AnonymousComponent, children: [
      {path: '', component: LandingComponent},
      {path: 'login', component: LoginComponent},
      {path: 'login/:provider', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'tos', component: TermOfServiceComponent},
      {path: RoutingPart.joinUs, component: TermOfServiceComponent},
      {path: 'faq', component: FaqComponent},
      {path: '404', component: NotFoundComponent},
      {path: '500', component: NotFoundComponent},
      {path: 'maintenance', component: MaintenanceComponent},
      {path: RoutingPart.logout, component: LogoutComponent}
    ]
  },
  {
    path: 'app', component: AuthenticatedComponent, canActivate: [AuthGuard], children: [
      {path: "", pathMatch: 'full', redirectTo: RoutingPart.userPhoneNumber},

      {
        path: "", component: ProfileComponent, children: [
          {path: "", pathMatch: 'full', redirectTo: RoutingPart.profile},
          {path: RoutingPart.profile, component: EditUserProfileComponent},
          {path: RoutingPart.changePassword, component: ChangePasswordComponent},
        ]
      },
      {
        path: RoutingPart.conversation, component: ConversationComponent,
        children: [
          {path: '', component: ConversationHistoryListComponent},
        ]
      },
      {
        path: RoutingPart.contact, component: ContactComponent,
        children: [
          {path: '', component: ContactListComponent},
        ]
      },
      {
        path: RoutingPart.userPhoneNumber, component: UserPhoneNumberComponent,
        children: [
          {path: '', component: UserPhoneNumberListComponent},
        ]
      },
      {
        path: RoutingPart.userVirtualPhoneNumber, component: UserVirtualPhoneNumberComponent,
        children: [
          {path: '', component: UserVirtualPhoneNumberListComponent},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
