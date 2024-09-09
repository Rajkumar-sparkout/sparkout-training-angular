import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChangeEventComponent } from './change-event/change-event.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProductDetailComponent } from './router/product-detail/product-detail.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { LogicalComponent } from './logical/logical.component';
import { AdvancedComponentsComponent } from './advanced-components/advanced-components.component';
import { DefferableViewComponent } from './defferable-view/defferable-view.component';
import { SignalsComponent } from './signals/signals.component';
import { PipeComponent } from './pipe/pipe.component';
import { SolidDesignComponent } from './solid-design/solid-design.component';

export const routes: Routes = [
    { path: "", redirectTo: "binding", pathMatch: "full" },
    { 
        path: "binding", component: DataBindingComponent,
        data: {
            title: 'Title for binding Component',
            descrption: 'Description of binding Component',
            ogTitle: 'Description of binding Component for social media',
          } 
    },
    { 
        path: "changeEvent", component: ChangeEventComponent, data : {title:'Change event'}, 
    },
    { path: "directives", component: DirectivesComponent, data : {title:'Directives'} },
    { path: "template-driven", component: TemplateDrivenComponent, data : {title:'Template driven form'} },
    { path: "reactive-form", component: ReactiveFormComponent },
    { path: "typed-form", component: TypedFormComponent, data : {title:'Typed form'} },
    { path: "neated-form-array", component: NestedFormArrayComponent, data : {title:'Nested form array'} },
    // activated route
    { path: "product/:id", component: ProductDetailComponent },
    { 
        path: "dashboard", loadComponent: ()=> import('./dashboard/dashboard.component').then(m=> m.DashboardComponent),
        data: {
            title: 'Title for dashboard Component',
            descrption: 'Description of third Component',
            ogDescription: 'Description of dashboard Component for social media',
          }
    },
    { 
        path: "error-handling", component: ErrorHandlerComponent,
        data: {
            title: 'Title for Error handling Component',
            descrption: 'Description of Error handling Component',
            robots: 'noindex, nofollow',
            ogTitle: 'Description of Error handling Component for social media',
          } 
    },
    { path: "rxjs-operator", component: RxjsOperatorsComponent},
    { path: "logical", component: LogicalComponent},
    { path: "ng-related", component: AdvancedComponentsComponent},
    { path: "defer", component: DefferableViewComponent},
    { path: "signals", component: SignalsComponent},
    { path: "pipe", component: PipeComponent},
    { path: "solid-principles", component: SolidDesignComponent},
];
