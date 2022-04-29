import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {

  let component: HeroesComponent;
  let mockHeroService;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj(['addHero', 'deleteHero', 'getHeroes'])
    component = new HeroesComponent(mockHeroService);
  });

  it('should set the heroes in the heroes array of HeroesComponent whenever getHeroes is called', () => {
    let HEROES: Hero[] = [{id: 1, name: 'SpiderDude', strength: 8}, {id:2, name: 'SuperDude', strength: 55}];
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    component.getHeroes();

    expect(component.heroes).toEqual([{id: 1, name: 'SpiderDude', strength: 8}, {id:2, name: 'SuperDude', strength: 55}]);
  })

})
