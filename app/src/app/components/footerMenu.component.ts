/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-footerMenu',
  templateUrl: './footerMenu.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class footerMenuComponent {
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
      this.sd_PQimRXYWZ1PGOsMU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PQimRXYWZ1PGOsMU(bh) {
    try {
      bh = this.sd_K0tzR0fKukjfqZxv(bh);
      //appendnew_next_sd_PQimRXYWZ1PGOsMU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PQimRXYWZ1PGOsMU');
    }
  }

  //appendnew_flow_footerMenuComponent_start

  sd_K0tzR0fKukjfqZxv(bh) {
    try {
      this.page.footers = [];
      bh = this.sd_iTidI9zCJE2NT0ri(bh);
      //appendnew_next_sd_K0tzR0fKukjfqZxv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K0tzR0fKukjfqZxv');
    }
  }

  sd_iTidI9zCJE2NT0ri(bh) {
    try {
      const page = this.page;
      page.footers = [
        'About',
        'Accecebility',
        'Help Center',
        'Privetly & terms',
        'Ad Choices',
        'Advertising',
        'Bussiness Services',
        'Get The LinkedIn app',
        'More',
      ];
      //appendnew_next_sd_iTidI9zCJE2NT0ri
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iTidI9zCJE2NT0ri');
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
  //appendnew_flow_footerMenuComponent_Catch
}
