import { Component } from '@angular/core';
import { FlagService } from './flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JasmineCodeCoverage';
  flag: string;

  private regex: RegExp = new RegExp(/-(.*?)-/);

  constructor(private service: FlagService) {}

  ngOnit() {
    this.service.getFlag().subscribe(
      (res) => {
        this.flag = res.flagDescription[0].code.match(this.regex)[1];

        if (this.flag === 'dev') {
          this.title = '../assessts/icons/dev.png';
        } else if (this.flag === 'qa') {
          this.title = '../assessts/icons/qa.png';
        } else if (this.flag === 'prod') {
          this.title = '../assessts/icons/prod.png';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
