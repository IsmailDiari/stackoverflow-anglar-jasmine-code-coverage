export interface Flag {
  code: string;
  desc: string;
}
export interface FlagModel {
  flagDescription: Flag[];
  employeeFlag: string;
  region: Flag;
  user: string;
}
