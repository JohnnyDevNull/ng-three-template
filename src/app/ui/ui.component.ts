import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UiInfobarBottomComponent } from './ui-infobar-bottom/ui-infobar-bottom.component';
import { UiInfobarTopComponent } from './ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './ui-sidebar-right/ui-sidebar-right.component';

@Component({
  selector: 'app-ui',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ui.component.html',
  imports: [
    UiInfobarBottomComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent
  ]
})
export class UiComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
