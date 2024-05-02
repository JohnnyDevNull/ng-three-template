import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { EngineComponent } from './engine/engine.component';
import { UiComponent } from './ui/ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  imports: [
    EngineComponent,
    UiComponent,
  ]
})
export class AppComponent {
}
