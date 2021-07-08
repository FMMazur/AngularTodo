import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListNameModalComponent } from './edit-list-name-modal.component';

describe('EditListNameModalComponent', () => {
  let component: EditListNameModalComponent;
  let fixture: ComponentFixture<EditListNameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListNameModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
