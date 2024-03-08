import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBscaComponent } from './navbar-bsca.component';

describe('NavbarBscaComponent', () => {
  let component: NavbarBscaComponent;
  let fixture: ComponentFixture<NavbarBscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
