import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ErrorService {
  constructor() {}

  getClientSideError(error) {
    return `Client side error: ${error}`;
  }

  getHttpError(error) {
    return `Http side error: ${error.message}`;
  }
}
