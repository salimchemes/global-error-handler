import { Injectable, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { LogService } from "./log.service";

@Injectable({
  providedIn: "root"
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorService: ErrorService,
    private logService: LogService
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      // Server error
      alert(this.errorService.getHttpError(error));
    } else {
      // Client Error
      this.logService.logErrorOnApplicationInsight(error);
      alert(this.errorService.getClientSideError(error));
    }
    // Always log errors
    this.logService.logError(error);
  }
}
