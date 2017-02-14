import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { ISession, ISpeaker } from './session.model';

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  @Input('model') session: ISession;

  constructor() { }

  ngOnInit() { }

  time(session: ISession) {
    return moment(session.Schedule.StartDatetime).format('h:mm a');
  }

  twitterUrl(speaker: ISpeaker) {
    return `https://twitter.com/${speaker.Twitterusername}`;
  }

  toggle(session) {
    session.ShowDescription = !session.ShowDescription; 
    return false;
  }
}
