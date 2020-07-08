export interface CallStatus {
  status: 'fetching' | 'success' | 'error' | null;
  error: string;
}