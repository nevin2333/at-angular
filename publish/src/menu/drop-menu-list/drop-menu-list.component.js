/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Renderer2 } from "@angular/core";
import { MenuListComponent } from "../menu-list/menu-list.component";
export class DropMenuListComponent extends MenuListComponent {
    /**
     * @param {?} el
     * @param {?} render
     */
    constructor(el, render) {
        super();
        this.el = el;
        this.render = render;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DropMenuListComponent.decorators = [
    { type: Component, args: [{
                selector: '[atDropMenuList]',
                template: `
    <ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
DropMenuListComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
function DropMenuListComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DropMenuListComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DropMenuListComponent.ctorParameters;
    /** @type {?} */
    DropMenuListComponent.prototype.el;
    /** @type {?} */
    DropMenuListComponent.prototype.render;
}
