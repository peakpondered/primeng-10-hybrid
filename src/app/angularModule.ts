import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgHybridStateDeclaration, UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionComponent } from './accordion/accordion.component';
import { sampleAppModuleAngularJS } from './angularJSModule';

import { AppRootComponent } from './app-root.component';

import { DropdownComponent } from './dropdown/dropdown.component';





export const appRootState = {
  name: 'appRoot',
  url: '/root',
  component: AppRootComponent,

};

export function getDialogService($injector) {
  return $injector.get('DialogService');
}

export function getContactsService($injector) {
  return $injector.get('Contacts');
}

// The main NgModule for the Angular portion of the hybrid app
@NgModule({
  imports: [   
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    // Provides the @uirouter/angular directives and registers
    // the future state for the lazy loaded contacts module
    UIRouterUpgradeModule.forRoot({ states: [ appRootState] }),
    
    AccordionModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    DropdownComponent,
    AppRootComponent,
    AccordionComponent
    
  ],
 
  entryComponents: [
    DropdownComponent,
    AppRootComponent,
    AccordionComponent
  ]
})
export class SampleAppModuleAngular {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [sampleAppModuleAngularJS.name], { strictDi: true });
  }
}
