import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usfooter',
  templateUrl: './usfooter.component.html',
  styleUrls: ['./usfooter.component.scss']
})
export class UsfooterComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
