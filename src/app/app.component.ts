import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "global-error-handler";

  constructor(private http: HttpClient) {}

  getClientError() {
    let foo: any;
    foo.fakeProperty = 1;
    // throw new Error("My client side error");
  }

  getHttpError() {
    this.http.get("fakeurl").subscribe();
  }
}
