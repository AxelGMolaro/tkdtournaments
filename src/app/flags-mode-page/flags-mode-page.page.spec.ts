import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlagsModePagePage } from './flags-mode-page.page';

describe('FlagsModePagePage', () => {
  let component: FlagsModePagePage;
  let fixture: ComponentFixture<FlagsModePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsModePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
