import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-position-details-search-form',
  templateUrl: './job-position-details-search-form.component.html',
  styleUrls: ['./job-position-details-search-form.component.scss']
})
export class JobPositionDetailsSearchFormComponent implements OnInit {
  modalForMergeIsVisible: boolean = false;
  jobPositionIdForMerge: string | null = this.router.snapshot.paramMap.get('id');

  constructor(
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  showModalForMerge(): void {
    this.modalForMergeIsVisible = true;
  }

  closeModalForMerge(): void {
    this.modalForMergeIsVisible = false;
  }

}
