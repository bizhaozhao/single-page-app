import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from './details.component';
import { HousingService } from '../housing.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let housingService: HousingService;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DetailsComponent, 
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
    
    housingService = TestBed.inject(HousingService);
    spyOn(housingService, 'getHousingLocationById').and.returnValue(Promise.resolve({
		  id: 1,
		  name: "A113 Transitional Housing",
		  city: "Santa Monica",
		  state: "CA",
		  photo: "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
		  availableUnits: 0,
		  wifi: false,
		  laundry: true
		}))
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
