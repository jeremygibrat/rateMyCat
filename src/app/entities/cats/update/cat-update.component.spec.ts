import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUpdateComponent } from './cat-update.component';

describe('CatUpdateComponent', () => {
  let component: CatUpdateComponent;
  let fixture: ComponentFixture<CatUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
