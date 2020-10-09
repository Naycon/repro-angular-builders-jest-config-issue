import { Component } from "@angular/core";
import imageSrc from "../assets/photo.jpg";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-builders-jest-default-config-repro";
  imageSrc = imageSrc;
}
