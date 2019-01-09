import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndepthComponent } from './indepth.component';

describe('IndepthComponent', () => {
  let component: IndepthComponent;
  let fixture: ComponentFixture<IndepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
