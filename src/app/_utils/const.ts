export enum RoutingPart {
  profile = 'profile',
  logout = 'logout',
  maintenance = 'maintenance',
  notFound = '404',
  tos = 'tos',
  login = 'login',
  app = 'app',
  changePassword = "change-password",
  contact = "contact",
  userPhoneNumber = "phone-number",
  conversation = "conversation",
  userVirtualPhoneNumber = "userVirtualPhoneNumber",
  joinUs = "join-us",

}

export function sortDataByFields(fields: string[]) {
  return (a: any, b: any) => {
    return fields.map(o => {
      let dir = 1;
      if (o[0] === '-') {
        dir = -1;
        o = o.substring(1);
      }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
    }).reduce((p, n) => p ? p : n, 0);
  }
}


export enum ScreenSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}


export const dialogStyle1 = {
  width: "100%",
  maxWidth: "400px"
}


export const emptyTableText = "Empty table"


export const unitValues = [];


export enum UserVirtualPhoneNumberStatus {
  pending = 0,
  is_inactive = 1,
  is_active = 2,
}


export enum ConversationHistoryCallingStatus {
  Pending = 0,
  OnCall = 1,
  Forwarded = 2,
  BotHangUp = 3,
  ContactHangUp = 4
}

export enum ConversationHistoryAnalysisStatus {
  Pending = 0,
  IsOk = 1,
  Scam = 2
}


export const ConversationHistoryCallingStatusText: { [key: number]: string } = {
  [ConversationHistoryCallingStatus.Pending]: "Pending",
  [ConversationHistoryCallingStatus.OnCall]: "On Call",
  [ConversationHistoryCallingStatus.Forwarded]: "Forwarded",
  [ConversationHistoryCallingStatus.BotHangUp]: "Bot Hang Up",
  [ConversationHistoryCallingStatus.ContactHangUp]: "Contact Hang Up"
};

export const ConversationHistoryAnalysisStatusText: { [key: number]: string } = {
  [ConversationHistoryAnalysisStatus.Pending]: "Pending",
  [ConversationHistoryAnalysisStatus.IsOk]: "Is Ok",
  [ConversationHistoryAnalysisStatus.Scam]: "Scam"
};
