import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Registerstep2Page } from './registerstep2.page';

describe('Registerstep2Page', () => {
  let component: Registerstep2Page;
  let fixture: ComponentFixture<Registerstep2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registerstep2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Registerstep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
