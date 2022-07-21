import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTornaumentComponent } from './form-tornaument.component';

describe('FormTornaumentComponent', () => {
  let component: FormTornaumentComponent;
  let fixture: ComponentFixture<FormTornaumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTornaumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTornaumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
