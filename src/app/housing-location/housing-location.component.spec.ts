import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponent } from './housing-location.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    component.housingLocation = {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `test.com/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
