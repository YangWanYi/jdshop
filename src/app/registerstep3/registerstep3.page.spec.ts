import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Registerstep3Page } from './registerstep3.page';

describe('Registerstep3Page', () => {
  let component: Registerstep3Page;
  let fixture: ComponentFixture<Registerstep3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registerstep3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Registerstep3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
