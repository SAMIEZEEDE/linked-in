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
  selector: 'bh-LeftProfileComponent',
  templateUrl: './LeftProfileComponent.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LeftProfileComponentComponent {
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
      this.sd_RqkukwkRXvsxjBaq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RqkukwkRXvsxjBaq(bh) {
    try {
      bh = this.sd_8U8zjm8jUAkXgZjV(bh);
      //appendnew_next_sd_RqkukwkRXvsxjBaq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RqkukwkRXvsxjBaq');
    }
  }

  //appendnew_flow_LeftProfileComponentComponent_start

  sd_8U8zjm8jUAkXgZjV(bh) {
    try {
      //appendnew_next_sd_8U8zjm8jUAkXgZjV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8U8zjm8jUAkXgZjV');
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
  //appendnew_flow_LeftProfileComponentComponent_Catch
}
