import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelgraphComponent } from './relgraph.component';

describe('RelgraphComponent', () => {
  let component: RelgraphComponent;
  let fixture: ComponentFixture<RelgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
