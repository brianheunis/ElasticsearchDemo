import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public items: any;

  constructor( private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getAllArtists().subscribe(res =>  {
      this.items = res.artists.artist;
    });
  }

}
