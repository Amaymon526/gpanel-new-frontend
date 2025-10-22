import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerServer, ServerStatus } from '../../models/DockerServer';
import { Sidebar } from '../../layout/sidebar/sidebar';
import {Breadcrumb} from 'primeng/breadcrumb';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-server-detail-advanced',
  standalone: true,
  imports: [CommonModule, Sidebar, Breadcrumb],
  templateUrl: './server-detail-advanced.html',
  styleUrl: './server-detail-advanced.css'
})
export class ServerDetailAdvanced implements OnInit {
  server?: DockerServer;
  serverId: string = '';

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.serverId = this.route.snapshot.paramMap.get('id') || '';
    this.loadServerData();

    this.items = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
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

  @HostListener('document:keydown.escape')
  handleEscapeKey(): void {
    this.goBack();
  }

  getStatusColor(status: ServerStatus): string {
    return status === ServerStatus.ONLINE ? 'from-green-400 dark:from-green-300 to-green-600 dark:to-green-500' : 'from-red-400 dark:from-red-300 to-red-600 dark:to-red-500';
  }

  getCpuColor(usage: number): string {
    if (usage < 50) return 'from-green-400 dark:from-green-300 to-green-600 dark:to-green-500';
    if (usage < 80) return 'from-yellow-400 dark:from-yellow-300 to-yellow-600 dark:to-yellow-500';
    return 'from-red-400 dark:from-red-300 to-red-600 dark:to-red-500';
  }

  getRamColor(usage: number): string {
    if (usage < 50) return 'from-cyan-400 dark:from-cyan-300 to-cyan-600 dark:to-cyan-500';
    if (usage < 80) return 'from-orange-400 dark:from-orange-300 to-orange-600 dark:to-orange-500';
    return 'from-red-400 dark:from-red-300 to-red-600 dark:to-red-500';
  }
}
