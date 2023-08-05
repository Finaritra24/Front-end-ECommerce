// prime-ng.module.ts
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
// Importez ici les modules PrimeNG nécessaires
import {ButtonModule} from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
// ... autres importations pour les modules PrimeNG

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    TableModule,
    CardModule,
    DividerModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
