import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvVisualComponent } from './csv-visual.component';

describe('CsvVisualComponent', () => {
  let component: CsvVisualComponent;
  let fixture: ComponentFixture<CsvVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
