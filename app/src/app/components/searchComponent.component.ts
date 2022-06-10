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
  selector: 'bh-searchComponent',
  templateUrl: './searchComponent.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class searchComponentComponent {
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
      this.sd_gJ3YhNYLzKVzUYsb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_gJ3YhNYLzKVzUYsb(bh) {
    try {
      bh = this.sd_VJ61LgejdW37ulAN(bh);
      //appendnew_next_sd_gJ3YhNYLzKVzUYsb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gJ3YhNYLzKVzUYsb');
    }
  }

  //appendnew_flow_searchComponentComponent_start

  sd_VJ61LgejdW37ulAN(bh) {
    try {
      this.page.navIcons = [];
      bh = this.sd_2dvI73BoGtqa6lII(bh);
      //appendnew_next_sd_VJ61LgejdW37ulAN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VJ61LgejdW37ulAN');
    }
  }

  sd_2dvI73BoGtqa6lII(bh) {
    try {
      const page = this.page;
      page.navIcons = [
        {
          icon: 'image',
          name: 'Photo',
          color: '#378fe9',
        },
        {
          icon: 'slideshow',
          name: 'Video',
          color: '#69a14d',
        },
        {
          icon: 'event',
          name: 'Event',
          color: '#c37d16',
        },
        {
          icon: 'description',
          name: 'Write article',
          color: '#e16745',
        },
      ];
      //appendnew_next_sd_2dvI73BoGtqa6lII
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2dvI73BoGtqa6lII');
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
  //appendnew_flow_searchComponentComponent_Catch
}
