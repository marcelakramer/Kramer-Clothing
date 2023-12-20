import { Injectable } from '@angular/core';
import { IMessage } from "../model/imessage";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageSweetService extends IMessage {

  constructor() {super();}

  success(message: string): void {
    Swal.fire(
      {
        title: 'Success',
        timer: 5000,
        text: message,
        icon: 'success',
        confirmButtonText: 'Ok'
      }
    );

  }

  error(message: string): void {
    Swal.fire(
      {
        title: 'Error',
        timer: 5000,
        text: message,
        icon: 'error',
        confirmButtonText: 'Ok'
      }
    );

  }

  info(message: string): void {
    Swal.fire(
      {
        title: 'Info',
        timer: 5000,
        text: message,
        icon: 'info',
        confirmButtonText: 'Ok'
      }
    );

  }

  alert(message: string): void {
    Swal.fire(
      {
        title: 'Alert',
        timer: 5000,
        text: message,
        icon: 'warning',
        confirmButtonText: 'Ok'
      }
    );
  }

}