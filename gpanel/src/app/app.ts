import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'PrimeNG Demo';
}
