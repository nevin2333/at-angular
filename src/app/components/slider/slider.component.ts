import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'atSlider',
  template: `<div (mousedown)="mouseDown()" (mouseup)="mouseUp()" class="at-slider" data-v-a01f69b8="">
  <div class="at-input-number at-slider__input at-input-number--normal" style="display: none;">
    <div class="at-input-number__input"><input type="number" max="80" min="20" class="at-input-number__original"></div>
    <div  class="at-input-number__handler"><span class="at-input-number__up"><i class="icon icon-chevron-up"></i></span>
      <span class="at-input-number__down"><i class="icon icon-chevron-down"></i></span></div>
  </div>
  <div class="at-slider__track">
    <div class="at-slider__bar" style="width: 26.6667%;"></div>
    <div  class="at-slider__dot-wrapper at-slider__dot-wrapper--hover at-slider__dot-wrapper--drag"
         style="left: 26.6667%;">
      <div class="at-tooltip"><span class="at-tooltip__trigger"><div
        class="at-slider__dot at-slider__dot--hover at-slider__dot--drag"></div> </span>
        <div class="at-tooltip__popper at-tooltip--top" style="top: -32px; left: -9.5px;">
          <div class="at-tooltip__arrow"></div>
          <div class="at-tooltip__content"><span>36</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  mouseDown() {
    console.log('mouseDown')
  }

  mouseUp() {
    console.log('mouseUp')
  }

}
