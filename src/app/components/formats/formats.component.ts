import { Component, Input, OnInit, inject } from '@angular/core';
import { Format } from 'src/app/interfaces/ReleaseResponse';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.scss'],
})
export class FormatsComponent  implements OnInit {
  @Input() formats!: Format[];
  common: CommonService = inject(CommonService);

  constructor() { }

  ngOnInit() { }

}
