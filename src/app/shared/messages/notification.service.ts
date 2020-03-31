import {Injectable} from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() {
  }

  notify(message: string) {
    alert(message)
  }
}
