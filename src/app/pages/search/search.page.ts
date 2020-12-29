import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';
import {NavController} from "@ionic/angular";
import {TrackPage} from "../track/track.page";
import {Router} from "@angular/router";

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    searchName: string ;
    items: any;
    itemId: string;

    constructor(private userService: UserServiceService ,
                private router: Router
    ) { }

    ngOnInit() {
        // search tracks if the search bar is empty
        // this.userService.getMusicTrackByName('a').subscribe( res => {
        //     this.items = res.results.trackmatches.track;
        //     this.itemId = res.results.mbid;
        //     console.log(this.items);
        // });
    }


// search tracks with the search name
    searchMusicTrack(key: any) {
        this.searchName  = key.target.value;
        this.userService.getMusicTrackByName(this.searchName).subscribe( res => {
            this.items = res.results.trackmatches.track;
            this.itemId = res.results.mbid;
            console.log(this.items);
        });
    }

// search NowNow items
    searchNowNowItem(key: any) {
        if(!key.target.value || key.target.value.length < 3){
            return;
         }    
        this.searchName  = key.target.value;
        this.userService.getNowNowItemsByName(this.searchName).subscribe(res => {
            console.log(res.data);
            this.items = res.data;
            //this.itemId = res.results.mbid;
            //console.log(this.items);
    });
}

// view More tracks
    viewMore(artist: any, trackName: any) {
        const param = { artistName : artist , track: trackName };
        this.router.navigate(['track', param]);


    }
}
