import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  //Funcion a modficar para cambiar el orden del dashboard
  getHeroes(): void {
    this.heroService.getHeroes()
      //Antiguo metodo
      // .subscribe(heroes => this.heroes = heroes.slice(0, 3));

      //Metodo para ordenar por nombre
      // .subscribe(heroes => this.heroes = heroes.sort((a,b) => a.name.localeCompare(b.name)));
      .subscribe(heroes => this.heroes = heroes.sort((a,b) => b.points - a.points));
      // product = product.sort((a, b) => a.PendingQuantity - b.PendingQuantity);
  }
}