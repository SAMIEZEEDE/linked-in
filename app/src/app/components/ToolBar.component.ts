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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ToolBar',
  templateUrl: './ToolBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ToolBarComponent {
  @Output('listenToIconClick')
  public listenToIconClick: any = new EventEmitter<any>();
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_U1v7BaBwNa691UbG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_U1v7BaBwNa691UbG(bh) {
    try {
      bh = this.sd_YksquegHrQmU9D8W(bh);
      //appendnew_next_sd_U1v7BaBwNa691UbG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U1v7BaBwNa691UbG');
    }
  }

  hideShow(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_n3VssQpbceVMn1LO(bh);
      //appendnew_next_hideShow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CFtWbasdBkOOUvaN');
    }
  }

  //appendnew_flow_ToolBarComponent_start

  sd_YksquegHrQmU9D8W(bh) {
    try {
      this.page.menuList = [
        { icon: 'home', name: 'Home', url: '', colour: 'red' },
        { icon: 'group', name: 'Network', url: '', colour: 'green' },
        { icon: 'business_center', name: 'Jobs', url: '', colour: 'red' },
        { icon: 'sms', name: 'Message', url: '', colour: 'blue' },
        {
          icon: 'notifications',
          name: 'Notifications',
          url: '',
          colour: 'red',
        },
        { icon: 'apps', name: 'Work', url: '', colour: 'red' },
      ];
      //appendnew_next_sd_YksquegHrQmU9D8W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YksquegHrQmU9D8W');
    }
  }

  sd_n3VssQpbceVMn1LO(bh) {
    try {
      bh.pageOutput.listenToIconClick.emit();
      //appendnew_next_sd_n3VssQpbceVMn1LO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n3VssQpbceVMn1LO');
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
  //appendnew_flow_ToolBarComponent_Catch
}
