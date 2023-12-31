import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent {

  constructor(private _services: NewsapiservicesService) { }

  businessnewsDisplay: any = []

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) => {
      this.businessnewsDisplay = result.articles
    });
  }

}
