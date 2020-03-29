import{  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatMenuModule,MatSidenavModule,MatToolbarModule,
    MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule ,MatGridListModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports:[ MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatMenuModule,MatSidenavModule,MatToolbarModule,
    MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule,
      MatGridListModule],
exports:[ MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatMenuModule,MatSidenavModule,MatToolbarModule,
    MatIconModule,MatListModule,MatTableModule,MatOptionModule,MatSelectModule,
      MatGridListModule]
})
export class MaterialModule{}