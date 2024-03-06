import { Component, OnInit } from '@angular/core';
import { EmptyPageMessage } from 'src/app/interfaces/EmptyPageMessage';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {
  emptyPageMessage: EmptyPageMessage = { 
    title: 'Empty collection', text: 'Start adding your albums'
  };

  constructor() { }

  ngOnInit() { }

}
