import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  GetDate(): string {
    return(new Date()).toUTCString();
  }

  error(msg: string){

    console.error(`Error:: ${this.GetDate()} ${msg}`);
  }

  warn(msg: string){

    console.warn(`warning::  ${this.GetDate()}  ${msg}`);
  }

  
  log(msg: string){

    console.log(`warning:  ${this.GetDate()}  ${msg}`);
  }
}
