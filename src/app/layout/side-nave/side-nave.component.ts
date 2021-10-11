import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nave',
  templateUrl: './side-nave.component.html',
  styleUrls: ['./side-nave.component.scss']
})
export class SideNaveComponent implements OnInit {

  link = [
    { name: 'Home', path: '/layout/request', icon: 'roofing' },
    { name: 'Aggregators', path: '', icon: 'person_outline' },
    { name: 'Cards Overview', path: '', icon: 'picture_in_picture' },
    { name: 'User Management', path: '', icon: 'credit_card' },
    { name: 'Free Overview', path: '', icon: 'picture_in_picture' }



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
