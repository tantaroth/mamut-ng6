import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MamutFormComponent } from './components/mamut-form/mamut-form.component';
import { MamutNg6LibComponent } from './mamut-ng6-lib.component';

import { StoreService } from './store.service';

import { Config } from './models/config';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MamutNg6LibComponent, MamutFormComponent],
  exports: [MamutNg6LibComponent, MamutFormComponent]
})
export class MamutNg6Module {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: MamutNg6Module,
      providers: [StoreService, { provide: 'config', useValue: config }]
    };
  }
}
