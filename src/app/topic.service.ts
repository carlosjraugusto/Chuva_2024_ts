import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TopicServiceTsModule { }




@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private topics: any[] = [];

  constructor() {}

  getAllTopics() {
    const storedTopics = localStorage.getItem('topics');
    if (storedTopics) {
      this.topics = JSON.parse(storedTopics);
    }
    return this.topics;
  }

  addTopic(topic: any) {
    this.topics.push(topic);
    localStorage.setItem('topics', JSON.stringify(this.topics));
  }
}
