import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui-sidebar-right',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui-sidebar-right.component.html'
})
export class UiSidebarRightComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
