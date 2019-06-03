import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('App Component', () => {
    let fixture: ComponentFixture<AppComponent>; //Todo - What does component fixture do?

    beforeEach(()=> {
        TestBed.configureTestingModule({ //TestBed will spin up a module for us
            declarations: [AppComponent], //declares the component
            schemas: [CUSTOM_ELEMENTS_SCHEMA] //VsCode Auto-imports this from @angular/compiler/src/core and it causes blow ups https://github.com/angular/angular-cli/issues/11469#issuecomment-416337291
        });
        fixture = TestBed.createComponent(AppComponent); //creates component instance
    })
    it('Has a h1 title', () => {
        fixture.componentInstance.title = "Hello Test!";

        fixture.detectChanges(); //if you don't run this, Karma will say "Expected '' to contain 'Hello Test!'"

        expect(fixture.nativeElement.querySelector('h1').textContent).toContain("Hello Test!");
    });
});