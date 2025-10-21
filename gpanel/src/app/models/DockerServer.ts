// models/docker-server.model.ts

export interface DockerServer {
  id: string;
  name: string;
  ip: string;
  status: ServerStatus;
  runtime: string;
  cpuUsage: number;
  ramUsage: number;
}

export enum ServerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline'
}

export class DockerServerModel implements DockerServer {
  id: string;
  name: string;
  ip: string;
  status: ServerStatus;
  runtime: string;
  cpuUsage: number;
  ramUsage: number;

  constructor(data: Partial<DockerServer> = {}) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.ip = data.ip || '';
    this.status = data.status || ServerStatus.OFFLINE;
    this.runtime = data.runtime || '0d 0h 0m';
    this.cpuUsage = data.cpuUsage || 0;
    this.ramUsage = data.ramUsage || 0;
  }

  /**
   * Prüft ob der Server online ist
   */
  isOnline(): boolean {
    return this.status === ServerStatus.ONLINE;
  }

  /**
   * Gibt die CPU-Auslastung als formatierten String zurück
   */
  getFormattedCpuUsage(): string {
    return `${this.cpuUsage}%`;
  }

  /**
   * Gibt die RAM-Auslastung als formatierten String zurück
   */
  getFormattedRamUsage(): string {
    return `${this.ramUsage}%`;
  }

  /**
   * Bestimmt den Schweregrad der CPU-Auslastung
   */
  getCpuSeverity(): 'low' | 'medium' | 'high' {
    if (this.cpuUsage < 50) return 'low';
    if (this.cpuUsage < 80) return 'medium';
    return 'high';
  }

  /**
   * Bestimmt den Schweregrad der RAM-Auslastung
   */
  getRamSeverity(): 'low' | 'medium' | 'high' {
    if (this.ramUsage < 50) return 'low';
    if (this.ramUsage < 80) return 'medium';
    return 'high';
  }

  /**
   * Konvertiert Runtime-String in Millisekunden
   */
  getRuntimeInMilliseconds(): number {
    const regex = /(\d+)d\s*(\d+)h\s*(\d+)m/;
    const match = this.runtime.match(regex);

    if (!match) return 0;

    const days = parseInt(match[1], 10);
    const hours = parseInt(match[2], 10);
    const minutes = parseInt(match[3], 10);

    return (days * 24 * 60 * 60 * 1000) +
      (hours * 60 * 60 * 1000) +
      (minutes * 60 * 1000);
  }

  /**
   * Erstellt eine DockerServer-Instanz aus JSON-Daten
   */
  static fromJson(json: any): DockerServerModel {
    return new DockerServerModel({
      id: json.id,
      name: json.name,
      ip: json.ip,
      status: json.status as ServerStatus,
      runtime: json.runtime,
      cpuUsage: json.cpuUsage,
      ramUsage: json.ramUsage
    });
  }

  /**
   * Konvertiert die Instanz zu JSON
   */
  toJson(): object {
    return {
      id: this.id,
      name: this.name,
      ip: this.ip,
      status: this.status,
      runtime: this.runtime,
      cpuUsage: this.cpuUsage,
      ramUsage: this.ramUsage
    };
  }
}
