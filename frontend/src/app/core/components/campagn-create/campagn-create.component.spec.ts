import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagnCreateComponent } from './campagn-create.component';

describe('CampagnCreateComponent', () => {
  let component: CampagnCreateComponent;
  let fixture: ComponentFixture<CampagnCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampagnCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampagnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
