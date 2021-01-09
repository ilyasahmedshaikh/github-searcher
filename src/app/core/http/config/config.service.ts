import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  endpoint: string = "https://api.github.com/";

  constructor() { }
}
