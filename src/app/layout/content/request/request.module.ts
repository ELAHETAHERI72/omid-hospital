import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FundService } from 'src/app/services/fund-request.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/helper/authInterSeptor';

const route = [
  { path: '', component: RequestComponent }
]

@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forChild(route)
  ],
  providers: [FundService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class RequestModule { }
