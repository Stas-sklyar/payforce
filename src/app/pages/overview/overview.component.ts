import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private readonly headerService: HeaderService
  ) {
  }

  ngOnInit(): void {
    this.headerService.setCurrentTitle("Overview");
  }

}
