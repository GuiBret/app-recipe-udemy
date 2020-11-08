import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipeWarningComponent } from './select-recipe-warning.component';

describe('SelectRecipeWarningComponent', () => {
  let component: SelectRecipeWarningComponent;
  let fixture: ComponentFixture<SelectRecipeWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecipeWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecipeWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
