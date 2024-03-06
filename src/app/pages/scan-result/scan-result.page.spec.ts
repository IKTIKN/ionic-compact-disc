import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanResultPage } from './scan-result.page';

describe('ScanResultPage', () => {
  let component: ScanResultPage;
  let fixture: ComponentFixture<ScanResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
