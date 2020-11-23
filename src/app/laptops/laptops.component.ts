import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptopList= [
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
    {
    image_url : 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
    title : 'Gaming LapTop',
    price : '1000'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
