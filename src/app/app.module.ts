import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { MatToolbarModule, MatMenuModule,
//          MatSidenavModule, MatFormFieldModule,
//          MatInputModule, MatSelectModule,
//          MatCardModule, MatIconModule,
//          MatCheckboxModule, MatRadioModule,
//          MatSliderModule,

//          MatTabsModule, MatRippleModule } from '@angular/material';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  // MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS} from '@angular/material';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';


import 'hammerjs';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InputComponent } from './input/input.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SliderComponent } from './slider/slider.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    SidenavComponent,
    InputComponent,
    FormFieldComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    SliderComponent,
    ToggleComponent,
    AutocompleteComponent,
    DatepickerComponent,
    IconComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatSidenavModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    // MatInputModule,
    // MatSelectModule,
    FormsModule,
    HttpClientModule,
    // MatCardModule,
    // MatIconModule,
    // MatCheckboxModule,
    // MatRadioModule,
    // MatSliderModule,


    // MatTabsModule,
    // MatRippleModule

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    // MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    CdkTableModule,
    A11yModule,
    BidiModule,
    CdkAccordionModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
  ],
  // providers: [
  //   // {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  //   // {provide: MAT_DATE_FORMATS, useValue: 'DD-MM-YYYY'}
  // ],

  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // dateAdapter.setLocale('pt-BR');
  }
}
