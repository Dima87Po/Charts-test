import { Component, OnInit } from '@angular/core';
import {
  distinctUntilChanged,
  Observable,
  Subscription,
  switchMap,
} from 'rxjs';
import { PollsService } from '../services/polls.service';
import { IPoll, IPollDetails } from '../models/poll.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.css'],
})
export class PollsListComponent implements OnInit {

  public polls!: IPoll[];
  public poll$!: Observable<IPollDetails>;
  public pollControl = new FormControl();

  private sub = new Subscription();

  constructor(
    private _pollsService: PollsService
  ) {}

  public ngOnInit(): void {
    this.sub = this._pollsService.getAllPolls()
      .subscribe((polls: IPoll[]) => {
        this.polls = polls;
        const poll = polls && polls[0];
  
        if (poll) {
          this.pollControl.setValue(poll.formId);
        }
      });

    this.poll$ = this.pollControl.valueChanges.pipe(
      distinctUntilChanged(),
      switchMap((formId: string) => this._pollsService.getPull(formId))
    );
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
