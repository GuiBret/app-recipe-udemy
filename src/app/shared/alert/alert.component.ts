import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})


export class AppAlertComponent {
  @Input() message: string;
}
