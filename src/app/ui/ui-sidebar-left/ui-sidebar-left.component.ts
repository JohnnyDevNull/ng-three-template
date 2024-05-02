import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui-sidebar-left',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-sidebar-left.component.html'
})
export class UiSidebarLeftComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
