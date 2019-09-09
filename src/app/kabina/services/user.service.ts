import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfiguration } from '../services/app-config.service';
import { RestService } from '../services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _appConfig: AppConfiguration,
    private _restService: RestService) { }

  public getUserList() : Observable<Object> {
    let url = this._appConfig.kabinaBaseURL + '/users';
    return this._restService.getByUrl(url);
  }
}
