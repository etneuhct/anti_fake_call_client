export interface ConversationHistory {
  insights: { explanation: string, scam_score: number };
  calling_status: number;
  analysis_status: number;
  id: string | number
}
