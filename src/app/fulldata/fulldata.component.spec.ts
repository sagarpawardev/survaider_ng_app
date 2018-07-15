import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldataComponent } from './fulldata.component';

describe('FulldataComponent', () => {
  let component: FulldataComponent;
  let fixture: ComponentFixture<FulldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
