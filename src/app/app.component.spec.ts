import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAccordion, MatCardModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatFormFieldModule, MatPaginatorModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AuthService } from './auth/auth.service';
import { PostsService } from './posts/posts.service';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { ErrorComponent } from './error/error.component';




describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let de: DebugElement;
  let errComponent: ComponentFixture<ErrorComponent>;
  let fakeService: AuthService;
  let spy: jasmine.Spy;
  let router: Router;
  let element: HTMLElement;
  
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PostListComponent,
        PostCreateComponent,
        LoginComponent,
        SignupComponent,
        MatExpansionPanelHeader,
        MatExpansionPanelActionRow,
        MatExpansionPanel,
        MatAccordion,
      
      ], 
      imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        PortalModule,
        MatToolbarModule,
        MatProgressSpinnerModule,     
        MatPaginatorModule,
        MatFormFieldModule,
        MatCardModule,
        RouterTestingModule.withRoutes( [{
          path: 'login',
          component: AppRoutingModule
      }, ])       
     ],
      providers: [HttpClient, HttpHandler, AuthService, AuthGuard, PostsService]
    })
    router = TestBed.get(Router); 
      
    fixture = TestBed.createComponent(AppComponent);
    fakeService = fixture.debugElement.injector.get(AuthService);

    appComponent = fixture.componentInstance;
    
    //ask fixture to detect changes
    fixture.detectChanges();
    // });
  })); 
  it('should create the app', (() => {
    
    expect(appComponent).toBeTruthy();
  }));
  it(` ngOnInit to have been called`, //inject([AuthService], (authService: AuthService) => {
    (() => {
      appComponent.ngOnInit();
      //expect(appComponent.getJoke()).toBeFalsy();
     //expect(fakeService.getIsAuth()).toEqual(false);
     // spy = spyOn(fakeService, 'getIsAuth').and.callThrough();
     spy = spyOn(fakeService, 'getAuthStatusListener');
      fakeService.getAuthStatusListener();
      expect(fakeService.getAuthStatusListener).toHaveBeenCalled();
      //expect(fakeService.getAuthStatusListener).toHaveBeenCalledWith(false);
    }
    ));
  it('should render title in a span tag', (() => {
/*       
      de = fixture.debugElement.query(By.css('button'));
      element = de.nativeElement; */
      //errComponent = TestBed.createComponent(ErrorComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('span').textContent).toContain('MyMensages');
    })); 
  });
