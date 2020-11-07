import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { AppComponent } from './app.component';
import { FlagService } from './flag.service';

let mockFlagService;
let fixture: ComponentFixture<AppComponent>;
describe('AppComponent', () => {
  beforeEach(async () => {
    mockFlagService = jasmine.createSpyObj(['getFlag']);
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: FlagService, useValue: mockFlagService }],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.content span').textContent).toContain(
      'JasmineCodeCoverage app is running!'
    );
  });
  it('should call subscribe method', fakeAsync(() => {
    mockFlagService.getFlag.and.returnValue(of('-dev-'));

    fixture.componentInstance.ngOnit();
    tick();

    expect(mockFlagService['getFlag']).toHaveBeenCalled();
  }));
  it('should set image to dev When getFlag returns dev', fakeAsync(() => {
    mockFlagService.getFlag.and.returnValue(of('-dev-'));

    fixture.componentInstance.ngOnit();
    tick();

    expect(fixture.componentInstance.title).toEqual(
      '../assessts/icons/dev.png'
    );
  }));
  it('should set image to qa When getFlag returns qa', fakeAsync(() => {
    mockFlagService.getFlag.and.returnValue(of('-qa-'));

    fixture.componentInstance.ngOnit();
    tick();

    expect(fixture.componentInstance.title).toEqual('../assessts/icons/qa.png');
  }));
  it('should set image to prod When getFlag returns prod', fakeAsync(() => {
    mockFlagService.getFlag.and.returnValue(of('-prod-'));

    fixture.componentInstance.ngOnit();
    tick();

    expect(fixture.componentInstance.title).toEqual(
      '../assessts/icons/prod.png'
    );
  }));
  it('should output error if getFlag returns error', fakeAsync(() => {
    const error = new Error('some error');
    console.log = jasmine.createSpy('log');
    mockFlagService.getFlag.and.returnValue(throwError(error));

    fixture.componentInstance.ngOnit();
    tick();

    expect(console.log).toHaveBeenCalledWith(error);
  }));
});
