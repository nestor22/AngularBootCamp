import { Component, OnInit, Input } from '@angular/core';

export interface Post {
  title: string;
  imgUrl: string;
  username: string;
  content: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() post!: Post;

  constructor() {}

  ngOnInit(): void {}
}
