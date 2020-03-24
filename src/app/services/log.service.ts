import { Injectable } from "@angular/core";
import { ApplicationInsightService } from "./application-insight.service";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LogService {
  constructor(private applicationInsightService: ApplicationInsightService) {}

  logErrorOnApplicationInsight(error: Error) {
    return this.applicationInsightService.logError(error);
  }

  logError(error: Error | HttpErrorResponse) {
    console.error(error);
  }
}
