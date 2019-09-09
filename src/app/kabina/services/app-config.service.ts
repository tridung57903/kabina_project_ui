import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppConfiguration {
    kabinaBaseURL: string;
    landingPageLink: any;

    constructor() {
        this.kabinaBaseURL = environment.serverUrls.kabinaBaseURL;
        if(environment['landingPagePath']){
            this.landingPageLink = [environment['landingPagePath']];
        }
    }
}
