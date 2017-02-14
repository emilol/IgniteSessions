export interface ISession {
  Name: string;
  Description: string;
  Schedule: ISchedule;
  Details: IDetails;
  Speakers: ISpeaker[];
}

export interface ISchedule {
  StartDatetime: Date;
  EndDatetime: Date;

  FormattedStartDate: string;
  IsToday: boolean;
  Room: string;
  Status: string;
}

export interface IDetails {
  Duration: string;
}

export interface ISpeaker {
  Name: string;
  PhotoPath: string;
  Twitterusername: string;
}