import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {ClusterSetupMasterSettings} from "cluster";
import {MasterURLService} from "./services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
