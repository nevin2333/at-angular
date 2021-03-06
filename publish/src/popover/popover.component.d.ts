import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
export declare class PopoverComponent implements OnInit {
    private _renderer;
    protected _changeDetector: ChangeDetectorRef;
    private _clickHide;
    private _visible;
    hasFilterButton: boolean;
    _triggerWidth: number;
    _placement: any;
    _dropDownPosition: 'top' | 'center' | 'bottom';
    _positions: ConnectionPositionPair[];
    _subscription: Subscription;
    _atMenu: any;
    _atOrigin: any;
    trigger: 'click' | 'hover';
    _visibleChange: Subject<boolean>;
    atVisibleChange: EventEmitter<boolean>;
    _cdkOverlay: CdkConnectedOverlay;
    toBoolean(value: boolean | string): boolean;
    atClickHide: boolean;
    atVisible: boolean;
    placement: any;
    readonly atPlacement: any;
    _onClickEvent(): void;
    _onMouseEnterEvent(e: MouseEvent): void;
    _onMouseLeaveEvent(e: MouseEvent): void;
    _hide(): void;
    _show(): void;
    _onPositionChange(position: ConnectedOverlayPositionChange): void;
    _clickDropDown($event: MouseEvent): void;
    _setTriggerWidth(): void;
    _onVisibleChange: (visible: boolean) => void;
    _startSubscribe(observable$: Observable<boolean>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    readonly _hasBackdrop: boolean;
    constructor(_renderer: Renderer2, _changeDetector: ChangeDetectorRef);
}
