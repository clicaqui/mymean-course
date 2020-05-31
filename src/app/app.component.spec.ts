import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { Observable } from 'rxjs/Rx';
import { PostsService } from './posts/posts.service';
import { Router } from '@angular/router';


describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  let component: AppComponent;
  let fakeService: any;
  let location: Location;
  let router: Router;
  
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
    appComponent = fixture.debugElement.componentInstance;

    router.initialNavigation(); 
    //.compileComponents().then(() => {

       fixture.detectChanges();
      fakeService = jasmine.createSpyObj(fakeService,['getJoke']);

      fakeService.getJoke.and.returnValue(Observable.of(true));
      component = new AppComponent(fakeService); 
   // });
  })); 
  it('should create the app', (() => {

    expect(appComponent).toBeTruthy();
  }));
   it(` ngOnInit to have been called`, //inject([PostsService], (postService: PostsService) => {
    (() => {
      //appComponent.ngOnInit();
      /*const compiledDom = fixture.debugElement.nativeElement;
      compiledDom.querySelector('p');
      fixture.detectChanges();
       fixture.whenStable().then(() => {
        expect(compiledDom.textContent).toContain('MyMensagesLoginSignup');

      }); */
      
      component.ngOnInit();
      //component.ngOnDestroy();
      expect(component.joke).toContain(false);
     // expect(spyOn(component , 'ngOnDestroy')).toHaveBeenCalled();
      //expect(fakeService.getJoke).toHaveBeenCalled();
    }
  ));
  it('should render title in a span tag', (() => {
  
   //const service = TestBed.get(PostsService);
  
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('MyMensages');
  })); 
});
