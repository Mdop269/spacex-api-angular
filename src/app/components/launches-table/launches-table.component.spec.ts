import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesTableComponent } from './launches-table.component';

describe('LaunchesTableComponent', () => {
  let component: LaunchesTableComponent;
  let fixture: ComponentFixture<LaunchesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
