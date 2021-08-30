import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/images/tree1.jpg',
      username: '@nature',
      content: 'I saw neat tree today',
    },
    {
      title: 'Snowy mountain',
      imgUrl: 'assets/mountain.jpg',
      username: '@mountainlover',
      content: 'here is a picture of a snowy mountain',
    },
    {
      title: 'mountain byking',
      imgUrl: 'assets/byking.jpg',
      username: '@byking',
      content: 'this is a byking mountain',
    },
  ];
}
