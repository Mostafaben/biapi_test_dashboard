import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListingsComponent } from './users-listings.component';

describe('UsersListingsComponent', () => {
  let component: UsersListingsComponent;
  let fixture: ComponentFixture<UsersListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
