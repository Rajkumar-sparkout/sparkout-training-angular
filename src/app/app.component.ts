import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChangeEventComponent } from './change-event/change-event.component';
import { HeaderComponent } from './header/header.component';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'sparkout-training';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
  ){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe(() => {

      var rt = this.getChild(this.activatedRoute)

      rt.data.subscribe((data: any) => {
        this.titleService.setTitle(data.title);

        if (data.descrption) {
          this.metaService.updateTag({ name: 'description', content: data.descrption })
        } else {
          this.metaService.removeTag("name='description'")
        }

        if (data.robots) {
          this.metaService.updateTag({ name: 'robots', content: data.robots })
        } else {
          this.metaService.updateTag({ name: 'robots', content: "follow,index" })
        }

        if (data.ogUrl) {
          this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
        } else {
          this.metaService.updateTag({ property: 'og:url', content: this.router.url })
        }

        if (data.ogTitle) {
          this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
        } else {
          this.metaService.removeTag("property='og:title'")
        }

        if (data.ogDescription) {
          this.metaService.updateTag({ property: 'og:description', content: data.ogDescription })
        } else {
          this.metaService.removeTag("property='og:description'")
        }

        if (data.ogImage) {
          this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
        } else {
          this.metaService.removeTag("property='og:image'")
        }
      });
    })
  }

  /**
   * @param activatedRoute 
   * @returns 
   */
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
