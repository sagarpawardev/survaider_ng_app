import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexgraphComponent } from './sexgraph.component';

describe('SexgraphComponent', () => {
  let component: SexgraphComponent;
  let fixture: ComponentFixture<SexgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
