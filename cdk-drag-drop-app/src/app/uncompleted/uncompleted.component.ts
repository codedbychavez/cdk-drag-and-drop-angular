// uncompleted.component.ts
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragDropService } from '../drag-drop.service';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrls: ['./uncompleted.component.css']
})
export class UncompletedComponent implements OnInit {

  constructor(private dragDropService: DragDropService) { }

  ngOnInit() {
  }

  uncompletedItemsList = [
    'Go hiking',
    'Read a book',
    'Walk my dog',
    'Eat breakfast'
  ]

  onDrop(event: CdkDragDrop<string[]>) {
    this.dragDropService.drop(event);
  }

}
