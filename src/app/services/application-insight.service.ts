import { Injectable } from "@angular/core";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class ApplicationInsightService {
  appInsights: ApplicationInsights;
  constructor() {
    this.appInsights = new ApplicationInsights({
      config: {
        connectionString: environment.appInsightsConfig.connectionString
        /* ...Other Configuration Options... */
      }
    });
    this.appInsights.loadAppInsights();
  }

  logError(error) {
    this.appInsights.trackException({ exception: error });
  }
}
