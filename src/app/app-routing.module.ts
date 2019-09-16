import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualComponent } from './visual/visual.component';
import { CsvComponent } from './csv/csv.component';
import { CsvVisualComponent } from './csv-visual/csv-visual.component';
import { MsqlVisualComponent } from './msql-visual/msql-visual.component';

const routes: Routes = [
 
    { path: 'mysql', component:  VisualComponent  },
    { path: 'csv', component: CsvComponent   },
    { path: 'csv-visual', component: CsvVisualComponent  },
    { path: 'msql-visual', component: MsqlVisualComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
