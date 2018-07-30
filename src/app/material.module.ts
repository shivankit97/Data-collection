import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatExpansionModule, MatIconModule,
   MatMenuModule, MatTabsModule, MatProgressBarModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatSidenavModule,MatCardModule,
    MatExpansionModule,MatIconModule,MatMenuModule,MatTabsModule,MatProgressBarModule,MatFormFieldModule],
  
    exports: [MatButtonModule,MatToolbarModule,MatSidenavModule,MatCardModule,
    MatExpansionModule,MatIconModule,MatMenuModule,MatTabsModule,MatProgressBarModule,MatFormFieldModule],
})
export class MaterialModule { }