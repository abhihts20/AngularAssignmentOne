import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit
{
  title = 'Click on the button to change the text';
  interpolation = 'String Interpolation Example';
  listFilter = String;
  defaultVal = 'Type in the box';
  imageWidth = 50;
  fruits = ['Apple', 'Mango', 'Orange' ];
  inputFruit = null;
  Adding = false;
  Addmore() {
    this.Adding = !this.Adding;
  }
  addFruit() {
    this.fruits.push(this.inputFruit);

    this.inputFruit = null;

    this.Adding = false;
  }
  constructor() { }

  ngOnInit(): void {
  }
  ChangeName(): void {
    this.title = 'Angular Assignment';
  }

}
