import { Component } from '@angular/core';
import { ChildNewComponent } from './child-new/child-new.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-parent-new',
  standalone: true,
  imports: [ChildNewComponent, DashboardComponent],
  templateUrl: './parent-new.component.html',
  styleUrl: './parent-new.component.css'
})
export class ParentNewComponent {

}
