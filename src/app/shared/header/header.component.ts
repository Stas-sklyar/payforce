import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = ""

  constructor(
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {

    this.headerService.pageTitle$.subscribe(pageTitle => {
      this.pageTitle = pageTitle;
    });
  }

  goToPreviousPage(): void {
    history.back();
  }

}
