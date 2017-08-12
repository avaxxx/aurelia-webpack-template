import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { 
        route: ['', 'welcome'], 
        name: 'welcome', 
        moduleId: PLATFORM.moduleName('./welcome'), 
        nav: true, 
        title: 'Welcome', 
        // layoutView: PLATFORM.moduleName('./layout.html'),
         layoutViewModel: PLATFORM.moduleName('layout') 
      },
      { 
        route: ['admin'], 
        name: 'admin', 
        moduleId: PLATFORM.moduleName('./home'), 
        nav: true, 
        title: 'Adminsitration', 
        // layoutView: PLATFORM.moduleName('./layout.html'),
         layoutViewModel: PLATFORM.moduleName('admin') 
      }
    ]);

    this.router = router;
  }
}
