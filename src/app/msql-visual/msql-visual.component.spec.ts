import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsqlVisualComponent } from './msql-visual.component';

describe('MsqlVisualComponent', () => {
  let component: MsqlVisualComponent;
  let fixture: ComponentFixture<MsqlVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsqlVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsqlVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
