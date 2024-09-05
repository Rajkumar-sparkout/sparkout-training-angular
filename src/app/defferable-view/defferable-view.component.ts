import { Component } from '@angular/core';
import { ChangeEventComponent } from '../change-event/change-event.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DirectivesComponent } from '../directives/directives.component';
import { BoxOneComponent } from '../box-one/box-one.component';
import { BoxTwoComponent } from '../box-two/box-two.component';
import { BoxThreeComponent } from '../box-three/box-three.component';
import { BoxFourComponent } from '../box-four/box-four.component';
import { BoxFiveComponent } from '../box-five/box-five.component';
import { LogicalComponent } from '../logical/logical.component';
import { RouterComponent } from '../router/router.component';

@Component({
  selector: 'app-defferable-view',
  standalone: true,
  imports: [ BoxOneComponent, BoxTwoComponent, BoxThreeComponent, BoxFourComponent, BoxFiveComponent, DashboardComponent, LogicalComponent, RouterComponent],
  templateUrl: './defferable-view.component.html',
  styleUrl: './defferable-view.component.css'
})
export class DefferableViewComponent {

  isVisible = false

  show(){
    this.isVisible = true
  }

}
