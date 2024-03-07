import { Component, Input, OnInit, inject } from '@angular/core';
import { Identifier } from 'src/app/interfaces/apiresponses/ReleaseResponse';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-identifiers',
  templateUrl: './identifiers.component.html',
  styleUrls: ['./identifiers.component.scss'],
})
export class IdentifiersComponent  implements OnInit {
  @Input() identifiers!: Identifier[];
  common: CommonService = inject(CommonService);

  constructor() { }

  ngOnInit() {}
  
}
