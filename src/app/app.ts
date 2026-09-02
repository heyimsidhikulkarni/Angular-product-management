import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productcomponent } from './components/productcomponent/productcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,productcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-practicefinal2');
}