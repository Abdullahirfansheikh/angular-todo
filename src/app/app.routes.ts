import { Routes } from '@angular/router';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { ImportantComponent } from './pages/important/important.component';
import { CompletedComponent } from './pages/completed/completed.component';

export const routes: Routes = [
    {
        path:"",
        component:AllTasksComponent
    },
    {
        path:"important",
        component:ImportantComponent
    },
    {
        path:"completed",
        component:CompletedComponent
    }
];
