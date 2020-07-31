import { CdkDragPreview } from '@angular/cdk/drag-drop';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDirective, ngMocks, MockedDirective } from 'ng-mocks';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockDirective(CdkDragPreview)
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add the extra css class to the preview', () => {
    const preview = ngMocks.findInstance(fixture.debugElement, CdkDragPreview) as MockedDirective<CdkDragPreview>;
    preview.__render();
    fixture.detectChanges();

    // don't know how to get the classes from the preview, so do a normal query
    expect(fixture.debugElement.query(By.css('.dragdrop-preview')).nativeElement).toHaveClass('extra-class');
  });



});
