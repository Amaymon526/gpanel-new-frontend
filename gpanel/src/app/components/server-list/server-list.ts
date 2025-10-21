import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { ProgressBar } from 'primeng/progressbar';
import { Tag } from 'primeng/tag';
import { DockerServer, ServerStatus } from '../../models/DockerServer';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-server-list',
  imports: [
    CommonModule,
    Card,
    ProgressBar,
    Tag,
    ButtonModule,
    TableModule
  ],
  templateUrl: './server-list.html',
  styleUrl: './server-list.css'
})
export class ServerList implements OnInit{
  servers: DockerServer[] = []

  ngOnInit() {
    this.servers = [
      {
        id: '1',
        name: 'Production Server',
        ip: '192.168.1.100',
        status: ServerStatus.ONLINE,
        runtime: '15d 7h 23m',
        cpuUsage: 45,
        ramUsage: 62
      },
      {
        id: '2',
        name: 'Development Server',
        ip: '192.168.1.101',
        status: ServerStatus.ONLINE,
        runtime: '3d 12h 45m',
        cpuUsage: 23,
        ramUsage: 38
      },
      {
        id: '3',
        name: 'Staging Server',
        ip: '192.168.1.102',
        status: ServerStatus.OFFLINE,
        runtime: '0d 0h 0m',
        cpuUsage: 0,
        ramUsage: 0
      },
      {
        id: '4',
        name: 'Testing Server',
        ip: '192.168.1.103',
        status: ServerStatus.ONLINE,
        runtime: '7d 3h 12m',
        cpuUsage: 78,
        ramUsage: 85
      },
      {
        id: '5',
        name: 'Backup Server',
        ip: '192.168.1.104',
        status: ServerStatus.ONLINE,
        runtime: '30d 15h 8m',
        cpuUsage: 12,
        ramUsage: 25
      }
    ];
  }

  getCpuProgressClass(usage: number): string {
    if (usage < 50) return 'progress-low';
    if (usage < 80) return 'progress-medium';
    return 'progress-high';
  }

  getRamProgressClass(usage: number): string {
    if (usage < 50) return 'progress-low';
    if (usage < 80) return 'progress-medium';
    return 'progress-high';
  }


}
