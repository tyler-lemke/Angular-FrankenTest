import { TestBed } from "@angular/core/testing";
import { HeroSearchService } from "./hero-search.service";
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('Hero Service', () => {
    let service: HeroSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeroSearchService],
            imports: [
                HttpClientTestingModule
            ]
        })
    });
    it('', () => {
        
    });
});