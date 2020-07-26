// completed.component.ts
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragDropService } from '../drag-drop.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private dragDropService: DragDropService) { }

  ngOnInit() {
  }

  completedItemsList = [
    'Sleep',
    'Write code',
  ]

  onDrop(event: CdkDragDrop<string[]>) {
    this.dragDropService.drop(event);
    }
  }


