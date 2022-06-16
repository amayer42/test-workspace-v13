import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test-workspace-v13-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyFirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
