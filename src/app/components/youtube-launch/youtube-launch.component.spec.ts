import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLaunchComponent } from './youtube-launch.component';

describe('YoutubeLaunchComponent', () => {
  let component: YoutubeLaunchComponent;
  let fixture: ComponentFixture<YoutubeLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeLaunchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
