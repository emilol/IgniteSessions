import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import * as moment from 'moment';

import { SessionsService } from './sessions.service';
import { ISession } from './session/session.model';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessions = {};

  constructor(private sessionsService: SessionsService){
  }

  ngOnInit() {
    this.sessionsService.getAll()
      .subscribe((data: Response) => {
        this.sessions = this.groupByDay(data.json().Sessions);
      });
  }

  groupByDay(sessions: ISession[]) {
    return _.groupBy(sessions, (session) => {
      return moment(session.Schedule.StartDatetime).format('dddd');
    });
  } 
  
  getDays() {
    return Object.keys(this.sessions);
  }

  showDay(day) {
    let isToday = day === moment().format('dddd');
    let isTomorrow = day === moment().add(1, 'day').format('dddd');
    let lastSessionIsOver = this.isOver(<ISession>_.last(this.sessions[day]));

    return isToday ? !lastSessionIsOver : isTomorrow;
  }

  isOver(session: ISession) {
    return moment(session.Schedule.EndDatetime).isSameOrBefore(moment(), 'minute');
  }
}