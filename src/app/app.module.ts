import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';
import { OverviewComponent } from './pages/overview/overview.component';
import { VariancesExplanationComponent } from './pages/variances-explanation/variances-explanation.component';
import { FinancialHealthcheckComponent } from './pages/financial-healthcheck/financial-healthcheck.component';
import { BusinessUnitDetailsComponent } from './pages/business-unit-details/business-unit-details.component';
import { JobPositionDetailsComponent } from './pages/job-position-details/job-position-details.component';
import { ScenariosComponent } from './pages/scenarios/scenarios.component';
import { ScenarioDetailsComponent } from './pages/scenario-details/scenario-details.component';
import { EditJobPositionComponent } from './pages/edit-job-position/edit-job-position.component';
import { AddJobPositionComponent } from './pages/add-job-position/add-job-position.component';
import { ScenariosComparisonComponent } from './pages/scenarios-comparison/scenarios-comparison.component';
import { HumanRessourcesHealthcheckComponent } from './pages/human-ressources-healthcheck/human-ressources-healthcheck.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { OverviewSearchFormComponent } from './pages/overview/overview-search-form/overview-search-form.component';
import { OverviewSummaryComponent } from './pages/overview/overview-summary/overview-summary.component';
import { OverviewTableComponent } from './pages/overview/overview-table/overview-table.component';
import { CustomCurrencyPipe } from './custom-pipes/customCurrency.pipe';
import { BusinessUnitDetailsTableComponent } from './pages/business-unit-details/business-unit-details-table/business-unit-details-table.component';
import { BusinessUnitDetailsSearchFormComponent } from './pages/business-unit-details/business-unit-details-search-form/business-unit-details-search-form.component';
import { BusinessUnitDetailsSummaryComponent } from './pages/business-unit-details/business-unit-details-summary/business-unit-details-summary.component';
import { CustomIconForSelectComponent } from './shared/custom-icon-for-select/custom-icon-for-select.component';
import { JobPositionDetailsSummaryComponent } from './pages/job-position-details/job-position-details-summary/job-position-details-summary.component';
import { JobPositionDetailsSearchFormComponent } from './pages/job-position-details/job-position-details-search-form/job-position-details-search-form.component';
import { JobPositionDetailsTableComponent } from './pages/job-position-details/job-position-details-table/job-position-details-table.component';
import { JobPositionDetailsAdditionalInfoComponent } from './pages/job-position-details/job-position-details-additional-info/job-position-details-additional-info.component';
import { JobPositionDetailsAbsencesComponent } from './pages/job-position-details/job-position-details-additional-info/job-position-details-absences/job-position-details-absences.component';
import { JobPositionDetailsAdvantagesComponent } from './pages/job-position-details/job-position-details-additional-info/job-position-details-advantages/job-position-details-advantages.component';
import { JobPositionDetailsPeopleComponent } from './pages/job-position-details/job-position-details-additional-info/job-position-details-people/job-position-details-people.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    VariancesExplanationComponent,
    OverviewComponent,
    FinancialHealthcheckComponent,
    BusinessUnitDetailsComponent,
    JobPositionDetailsComponent,
    ScenariosComponent,
    ScenarioDetailsComponent,
    EditJobPositionComponent,
    AddJobPositionComponent,
    ScenariosComparisonComponent,
    HumanRessourcesHealthcheckComponent,
    HeaderComponent,
    SidebarComponent,
    OverviewSearchFormComponent,
    OverviewSummaryComponent,
    OverviewTableComponent,
    CustomCurrencyPipe,
    BusinessUnitDetailsTableComponent,
    BusinessUnitDetailsSearchFormComponent,
    BusinessUnitDetailsSummaryComponent,
    CustomIconForSelectComponent,
    JobPositionDetailsSummaryComponent,
    JobPositionDetailsSearchFormComponent,
    JobPositionDetailsTableComponent,
    JobPositionDetailsAdditionalInfoComponent,
    JobPositionDetailsAbsencesComponent,
    JobPositionDetailsAdvantagesComponent,
    JobPositionDetailsPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,

    NzButtonModule,
    NzDatePickerModule,
    NzSelectModule,
    NzAutocompleteModule,
    NzInputModule,
    NzIconModule,
    NzTableModule,
    NzPaginationModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
