import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasBscaComponent } from './tareas-bsca.component';

describe('TareasBscaComponent', () => {
  let component: TareasBscaComponent;
  let fixture: ComponentFixture<TareasBscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasBscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasBscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
