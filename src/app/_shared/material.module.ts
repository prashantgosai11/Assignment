import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule




} from '@angular/material';






const materialModules: any[] = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatSidenavModule,
  MatGridListModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  MatSliderModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule,
  MatSnackBarModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatStepperModule,
  MatProgressBarModule,

  MatNativeDateModule,

  MatPaginatorModule,
  MatSortModule,
  MatRadioModule



];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class CustomMaterialModule {}
