import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobPositionComponent } from './pages/add-job-position/add-job-position.component';
import { BusinessUnitDetailsComponent } from './pages/business-unit-details/business-unit-details.component';
import { EditJobPositionComponent } from './pages/edit-job-position/edit-job-position.component';
import { FinancialHealthcheckComponent } from './pages/financial-healthcheck/financial-healthcheck.component';
import { HumanRessourcesHealthcheckComponent } from './pages/human-ressources-healthcheck/human-ressources-healthcheck.component';
import { JobPositionDetailsComponent } from './pages/job-position-details/job-position-details.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ScenarioDetailsComponent } from './pages/scenario-details/scenario-details.component';
import { ScenariosComparisonComponent } from './pages/scenarios-comparison/scenarios-comparison.component';
import { ScenariosComponent } from './pages/scenarios/scenarios.component';
import { VariancesExplanationComponent } from './pages/variances-explanation/variances-explanation.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'variances-explanation', component: VariancesExplanationComponent },
  { path: 'financial-healthcheck/:id', component: FinancialHealthcheckComponent },
  { path: 'business-unit-details/:id', component: BusinessUnitDetailsComponent },
  { path: 'job-position-details/:id', component: JobPositionDetailsComponent },
  { path: 'scenarios', component: ScenariosComponent },
  { path: 'scenario-details', component: ScenarioDetailsComponent },
  { path: 'edit-job-position', component: EditJobPositionComponent },
  { path: 'add-job-position', component: AddJobPositionComponent },
  { path: 'scenarios-comparison', component: ScenariosComparisonComponent },
  { path: 'human-ressources-healthcheck', component: HumanRessourcesHealthcheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
