import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  collapsed: boolean = true;

  categories = [
    'Videos',
    'People',
    'Documents',
    'Events',
    'Communities',
    'Favorites',
    'Channels',
  ];

  posts = [];

  limit = 10;
  offset = 0;

  constructor(
    private apiService: APIService,
  ) { }

  ngOnInit(): void {

    this.getAllNews();

    for (let i = 0; this.posts.length < 6; i++) {
      this.posts.push({});
    }
  }

  getAllNews(offset = this.offset) {
    this.apiService.get(`https://test.spaceflightnewsapi.net/api/v2/articles`).then(
      response => {
        this.posts = response.data;
      }
    );
  }

}
