import { Injectable } from "@angular/core";
import { ApplicationInsightService } from "./application-insight.service";

@Injectable({
  providedIn: "root"
})
export class LogService {
  constructor(private applicationInsightService: ApplicationInsightService) {}

  logErrorOnApplicationInsight(error: Error) {
    return this.applicationInsightService.logError(error);
  }

  logError(error: Error | import("@angular/common/http").HttpErrorResponse) {
    console.error(error);
  }
}
