import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';

import { AppComponent } from './app.component';
import { HelloService } from './hello.service';

/**
 * Testing a component class without the DOM (same as a service test)
 */
describe('App Component', () => {
  let appComponent: AppComponent;
  let helloService: jest.Mocked<HelloService>;

  beforeEach(() => {
    helloService = createSpyObj(HelloService);

    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        {
          provide: HelloService,
          useValue: helloService
        }
      ]
    });

    appComponent = TestBed.inject(AppComponent);
  });

  it('should have no greeting after construction', () => {
    expect(appComponent.greeting).toEqual('');
    expect(helloService.calculateHello).not.toHaveBeenCalled();
  });

  it('should calculate greeting', () => {
    // setup and preconditions
    helloService.calculateHello.mockReturnValue('Hello, Joe!');

    // call test method
    appComponent.calculateGreeting();

    // assert postconditions
    expect(appComponent.greeting).toBe('Hello, Joe!');

    // verify mocks
    expect(helloService.calculateHello).toHaveBeenCalledWith('Hello');
  });
});
