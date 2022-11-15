import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuerdDetailsComponent } from './insuerd-details.component';

describe('InsuerdDetailsComponent', () => {
  let component: InsuerdDetailsComponent;
  let fixture: ComponentFixture<InsuerdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuerdDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuerdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
