import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the beach',
      url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-1174732.jpg&fm=jpg',
    },
    {
      title: 'At the disco',
      url: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?cs=srgb&dl=pexels-quintin-gellar-313782.jpg&fm=jpg',
    },
    {
      title: 'At the NY',
      url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-1174732.jpg&fm=jpg',
    },
    {
      title: 'At the house',
      url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
    },
    {
      title: 'At the aparment',
      url: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439391.jpg&fm=jpg',
    },
    {
      title: 'At the beach',
      url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-1174732.jpg&fm=jpg',
    },
    {
      title: 'At the disco',
      url: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?cs=srgb&dl=pexels-quintin-gellar-313782.jpg&fm=jpg',
    },
    {
      title: 'At the NY',
      url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-1174732.jpg&fm=jpg',
    },
    {
      title: 'At the house',
      url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
    },
    {
      title: 'At the aparment',
      url: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439391.jpg&fm=jpg',
    },
    {
      title: 'At the beach',
      url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-1174732.jpg&fm=jpg',
    },
    {
      title: 'At the disco',
      url: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?cs=srgb&dl=pexels-quintin-gellar-313782.jpg&fm=jpg',
    },
    {
      title: 'At the NY',
      url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?cs=srgb&dl=pexels-vincent-gerbouin-1174732.jpg&fm=jpg',
    },
    {
      title: 'At the house',
      url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
    },
    {
      title: 'At the aparment',
      url: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439391.jpg&fm=jpg',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
