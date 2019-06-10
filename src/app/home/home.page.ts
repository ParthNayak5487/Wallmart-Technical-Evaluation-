import { Component } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  string: any;
  count: any;
  keys: any;
  outputString = '';
  convertString: any;
  leetArray: any;
  leetOutput: any = [];
  constructor() {
    this.inatializeLeetArray();
    this.string = 'aaabbdcccccf'; // Insitalize string with the given value
    this.count = _.countBy(this.string); // Count all charactes in given string
    this.keys = Object.keys(this.count); // Will return the keys of the given array. 

    // for loop to get the output display. 
    _.forEach(this.keys, k => {
      if (this.outputString === null) {
        this.outputString = k + this.count[k];
      } else {
        this.outputString = this.outputString + k + this.count[k];
      }
    });
    this.loadValues();
  }

  async loadValues() {
    await this.onConvert('Let’s have some fun.');
    await this.onConvert('C is for cookie, that’s good enough for me');
    await this.onConvert('By the power of Grayskull!');
  }

  async onConvert(parameter?: string) {
    let result = '';
    const tempString = parameter ? _.values(parameter) : _.values(this.convertString);

    _.forEach(tempString, str => {
      const isLeet = _.filter(this.leetArray, y => {
        return y.chara === str;
      });
      if (_.size(isLeet) > 0) {
        result = result + isLeet[0].replace;
      } else {
        result = result + str;
      }
    });
    this.leetOutput.push({
      actual: parameter ? parameter : this.convertString,
      leetValue: result
    });
    this.convertString = null;
  }


  inatializeLeetArray() {
    this.leetArray = [
      {
        chara: 'a',
        replace: 4
      },
      {
        chara: 'A',
        replace: 4
      },
      {
        chara: 'e',
        replace: 3
      },
      {
        chara: 'E',
        replace: 3
      },
      {
        chara: 'i',
        replace: 1
      },
      {
        chara: 'I',
        replace: 1
      },
      {
        chara: 'o',
        replace: 0
      },
      {
        chara: 'O',
        replace: 0
      },
      {
        chara: 's',
        replace: 5
      },
      {
        chara: 'S',
        replace: 5
      },
      {
        chara: 't',
        replace: 7
      },
      {
        chara: 'T',
        replace: 7
      }
    ];
  }
}
