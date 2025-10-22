import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerServer, ServerStatus } from '../../models/DockerServer';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { Chip } from "primeng/chip";
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-server-detail',
    imports: [
        CommonModule,
        ButtonModule,
        Card,
        Tag,
        Chip,
        Tooltip
    ],
  templateUrl: './server-detail.html',
  styleUrl: './server-detail.css'
})
export class ServerDetail implements OnInit {
  server?: DockerServer;
  serverId: string = '';
  ipCopied: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.serverId = this.route.snapshot.paramMap.get('id') || '';
    this.loadServerData();
  }

  loadServerData() {
    // Mock data - später durch echten API Call ersetzen
    const mockServers: DockerServer[] = [
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

    this.server = mockServers.find(s => s.id === this.serverId);
  }

  goBack() {
    this.router.navigate(['/']);
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

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.ipCopied = true;
      setTimeout(() => {
        this.ipCopied = false;
      }, 1000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}
