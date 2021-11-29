import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SemipolarSpinnerModule } from 'angular-epic-spinners';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule,
    SemipolarSpinnerModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule,
    SemipolarSpinnerModule
  ]
})
export class SharedModule { }
