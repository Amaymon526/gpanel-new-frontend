import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDetailAdvanced } from './server-detail-advanced';

describe('ServerDetailAdvanced', () => {
  let component: ServerDetailAdvanced;
  let fixture: ComponentFixture<ServerDetailAdvanced>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerDetailAdvanced]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerDetailAdvanced);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
