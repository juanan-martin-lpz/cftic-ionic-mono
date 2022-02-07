import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleUnoComponent } from './componentes/sample-uno/sample-uno.component';
import { SampleDosComponent } from './componentes/sample-dos/sample-dos.component';

const routes: Routes = [
  { path: 'sample-uno', component: SampleUnoComponent },
  { path: 'sample-dos', component: SampleDosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
