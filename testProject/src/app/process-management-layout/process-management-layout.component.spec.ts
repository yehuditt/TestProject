import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessManagementLayoutComponent } from './process-management-layout.component';

describe('ProcessManagementLayoutComponent', () => {
  let component: ProcessManagementLayoutComponent;
  let fixture: ComponentFixture<ProcessManagementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessManagementLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
