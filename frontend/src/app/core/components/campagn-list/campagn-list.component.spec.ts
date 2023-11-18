import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagnListComponent } from './campagn-list.component';

describe('CampagnListComponent', () => {
  let component: CampagnListComponent;
  let fixture: ComponentFixture<CampagnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampagnListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampagnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
