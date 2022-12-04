import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { IQuestion, IQuestionData } from '../models/poll.interface';
 
import { randomColors } from '../utils/colors';

@Component({
  selector: 'app-poll-item',
  templateUrl: './poll-item.component.html',
  styleUrls: ['./poll-item.component.css'],
})
export class PollItemComponent implements OnInit {
  @Input()
  public question!: IQuestion;

  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: [],
    datasets: [],
  };
       
  public backgroundColor = randomColors(20);
  public list: IQuestionData[] = [];
  

  public ngOnInit(): void {
    if (this.question) {
      this.list = this.question.data.sort((a: IQuestionData, b: IQuestionData) => b.count - a.count);
      this.pieChartData.labels = this.list.map((i: IQuestionData) => {
        return `${this.calculatePersentage(i.count)}% ${i.result}`;
      });
      this.pieChartData.datasets = [
        {
          data: this.list.map((i: IQuestionData) => i.count),
          backgroundColor: this.backgroundColor,
        }
      ];
    }
  }

  public calculatePersentage(count: number): string {
    return ((count / this.question.total) * 100).toFixed(2);
  }

  public background(index: number): string {
    return this.backgroundColor[index];
  }

}
