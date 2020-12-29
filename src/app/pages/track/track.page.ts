import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserServiceService} from '../../service/user-service.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {
  private artsist: string;
  private trackName: string;
  private albumDetail: any;
  private albumUrl: string;
  private image: string;
  private title: string;
  private wiki: string;
  private published: string;

  constructor(private activatedRoute: ActivatedRoute ,
              private userService: UserServiceService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.artsist = this.activatedRoute.snapshot.params.artistName;
      this.trackName = this.activatedRoute.snapshot.params.track;

      this.userService.getMusicTrackByNameAndArtist( this.artsist, this.trackName).subscribe(res => {
        this.albumUrl = res.track.album.url;
        this.image = res.track.album.image[2]['#text'];
        this.title = res.track.album.title;
        this.wiki = res.track.wiki.summary;
        this.published = res.track.wiki.published;
      });
    });
  }
}
