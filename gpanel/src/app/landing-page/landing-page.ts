import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import {ServerList} from '../components/server-list/server-list';
@Component({
  selector: 'app-landing-page',
  imports: [CardModule, ServerList],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
