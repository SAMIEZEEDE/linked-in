import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-footerMenuComponent
import { footerMenuComponent } from '../components/footerMenu.component';
//CORE_REFERENCE_IMPORT-discoverMoreComponent
import { discoverMoreComponent } from '../components/discoverMore.component';
//CORE_REFERENCE_IMPORT-whosHiringComponentComponent
import { whosHiringComponentComponent } from '../components/whosHiringComponent.component';
//CORE_REFERENCE_IMPORT-searchComponentComponent
import { searchComponentComponent } from '../components/searchComponent.component';
//CORE_REFERENCE_IMPORT-postComponentComponent
import { postComponentComponent } from '../components/postComponent.component';
//CORE_REFERENCE_IMPORT-feedCompnentComponent
import { feedCompnentComponent } from '../components/feedCompnent.component';
//CORE_REFERENCE_IMPORT-LeftProfileComponentComponent
import { LeftProfileComponentComponent } from '../components/LeftProfileComponent.component';
//CORE_REFERENCE_IMPORT-ToolBarComponent
import { ToolBarComponent } from '../components/ToolBar.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerMenuComponent
  footerMenuComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-discoverMoreComponent
  discoverMoreComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-whosHiringComponentComponent
  whosHiringComponentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchComponentComponent
  searchComponentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-postComponentComponent
  postComponentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-feedCompnentComponent
  feedCompnentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-LeftProfileComponentComponent
  LeftProfileComponentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ToolBarComponent
  ToolBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: homeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
