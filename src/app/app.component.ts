import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANGULARPWAYT';

  pokemonObj:any = {}
  bidoof:any = {}
  showBidoof:boolean = false

  constructor(private service:ServiceService) {

  }

  ngOnInit(): void {
    this.service.getPokemonData().subscribe((res:any)=> {
      this.pokemonObj = res
      console.log('pokemonObj',this.pokemonObj)
    })
  }

  shinyBidoof() {
    this.service.shinyBidoof().subscribe((res:any)=> {
      console.log('res',res)
      this.bidoof = res.sprites.front_shiny
      this.showBidoof = true
    })
  }
}
