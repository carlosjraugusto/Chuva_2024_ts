import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/topic.service';
@Component({
  selector: 'app-bottom-posts',
  templateUrl: './bottom-posts.component.html',
  })
export class BottomPostsComponent implements OnInit {

  exibirRespostas = false;

  toggleRespostas() {
    this.exibirRespostas = !this.exibirRespostas;
  }

  topics: any[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.topics = this.topicService.getAllTopics();
  }

}
