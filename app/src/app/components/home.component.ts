/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  @ViewChild('sidenav')
  public sidenav: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_24EKggNxtjzHpSjr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_24EKggNxtjzHpSjr(bh) {
    try {
      bh = this.sd_LGWkxUGsQICU9NKG(bh);
      //appendnew_next_sd_24EKggNxtjzHpSjr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_24EKggNxtjzHpSjr');
    }
  }

  togglesSideNav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_P6D49VBWBRH2jGQ8(bh);
      //appendnew_next_togglesSideNav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9bia41FU2XKkD8mV');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_LGWkxUGsQICU9NKG(bh) {
    try {
      bh = this.addingNavIcons(bh);
      //appendnew_next_sd_LGWkxUGsQICU9NKG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LGWkxUGsQICU9NKG');
    }
  }

  addingNavIcons(bh) {
    try {
      const page = this.page;
      page.menuList = [
        {
          icon: 'home',
          name: 'Home',
          colour: 'grey',
        },
        {
          icon: 'group',
          name: 'Network',
          colour: 'grey',
        },
        {
          icon: 'business_center',
          name: 'Jobs',
          colour: 'grey',
        },
        {
          icon: 'sms',
          name: 'Message',
          colour: 'grey',
        },
        {
          icon: 'notifications',
          name: 'Notifications',
          colour: 'grey',
        },
        {
          icon: 'apps',
          name: 'Work',
          colour: 'grey',
        },
      ];
      //appendnew_next_addingNavIcons
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PYjwzUgMxabIZQ5s');
    }
  }

  sd_P6D49VBWBRH2jGQ8(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        sidenav: this.sidenav,
      });
      bh = this.sd_ecKlQVNA7aUlbwva(bh);
      //appendnew_next_sd_P6D49VBWBRH2jGQ8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P6D49VBWBRH2jGQ8');
    }
  }

  sd_ecKlQVNA7aUlbwva(bh) {
    try {
      const page = this.page;
      bh.pageViews.sidenav.toggle();
      //appendnew_next_sd_ecKlQVNA7aUlbwva
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ecKlQVNA7aUlbwva');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}
