import { Directive, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    is_open = false;
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        
    }

    @HostListener('click') click(eventData: Event) {
        
        
        
        if(!this.is_open) {
        
            this.renderer.addClass(this.elementRef.nativeElement, 'open');
        } else {
            
            this.renderer.removeClass(this.elementRef.nativeElement, 'open');
        }

        this.is_open = !this.is_open;
    };

    @HostListener('blur') blur(eventData: Event) {
        this.renderer.removeClass(this.elementRef.nativeElement, 'open');

        this.is_open = false;
    }
}