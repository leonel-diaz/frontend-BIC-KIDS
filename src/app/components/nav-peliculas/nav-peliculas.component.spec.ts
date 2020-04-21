import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPeliculasComponent } from './nav-peliculas.component';

describe('NavPeliculasComponent', () => {
  let component: NavPeliculasComponent;
  let fixture: ComponentFixture<NavPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
