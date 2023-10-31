import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TVDBService } from '@phlex/tvdb';
import {AuthService} from "@phlex/auth";

@Component({
  selector: 'pshows-random-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-show.component.html',
  styleUrls: ['./random-show.component.scss'],
})
export default class RandomShowComponent {
  private readonly tvdb = inject(TVDBService);
  public readonly user$ = inject(AuthService).user$;
  public readonly show$ = this.tvdb.fetchRandomShow();


  constructor() {
    console.log('RandomShowComponent constructor');
    if (this.user$ != null) {
      this.user$.subscribe((user) => {
        console.log('RandomShowComponent user$ subscribe', user);
      });
    }
  }
}
