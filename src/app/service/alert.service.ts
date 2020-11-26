import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public message: string;

  constructor() { }

  setMessage(message: string) {
    this.message = message;
  }
}
