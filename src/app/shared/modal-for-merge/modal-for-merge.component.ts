import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MergeJobPositionProvider } from 'src/app/providers/merge-job-position.provider';

export interface IElementOfJobPositionForMerge {
  id: string;
  label: string;
}

@Component({
  selector: 'app-modal-for-merge',
  templateUrl: './modal-for-merge.component.html',
  providers: [MergeJobPositionProvider],
  styleUrls: ['./modal-for-merge.component.scss']
})
export class ModalForMergeComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() idOfCurrentMergingPosition: string | null = "";
  @Output() modalForMergeWasClosed = new EventEmitter<any>();

  jobPositionsList: IElementOfJobPositionForMerge[] = [];

  constructor(
    private message: NzMessageService,
    private mergeJobPositionProvider: MergeJobPositionProvider
    ) { }

  ngOnInit(): void {
    this.getJobPositionsList();
  }

  getJobPositionsList(): void {
    this.mergeJobPositionProvider.getJobPositionsList().then(jobPositionList => {
      this.jobPositionsList = [...jobPositionList];
    })
  }

  mergeJobPosition(): void {
    this.modalForMergeWasClosed.emit();
    this.createMessage("success");
  }

  handleCancel(): void {
    this.modalForMergeWasClosed.emit();
  }

  createMessage(type: string): void {
    this.message.create(type, "Job position successfully merged");
  }

}
