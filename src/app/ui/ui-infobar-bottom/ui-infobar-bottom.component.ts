import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui-infobar-bottom',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-infobar-bottom.component.html'
})
export class UiInfobarBottomComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
