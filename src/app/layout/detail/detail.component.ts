import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  DetailId: any;

  constructor(private active: ActivatedRoute) {

    this.active.params.subscribe(res => this.DetailId = res.id)
  }

  ngOnInit(): void {
  }

}
