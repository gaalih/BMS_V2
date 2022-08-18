export interface Value {
  modul: number;
  voltage: number;
  temperature: number;
  soc: number;
}

export interface General {
  total_voltage: number;
  max_voltage: number;
  min_voltage: number;
  avg_voltage: number;
  max_temperature: number;
  min_temperature: number;
  avg_temperature: number;
  max_soc: number;
  min_soc: number;
  avg_soc: number;
}

export interface Data {
  value: Value[];
  general: General[];
  current: number;
  timestamp: string;
}

export class Variable {
  static readonly VOLTAGE = new Variable(
    'Voltage',
    'V',
    true,
    'ic:round-bolt',
    '#f59e0b'
  );
  static readonly TEMPERATURE = new Variable(
    'Temp',
    '&deg;C',
    false,
    'fluent:temperature-24-regular',
    '#06b6d4'
  );
  static readonly CURRENT = new Variable('Current', 'A', true, '', '#10b981');
  static readonly SOC = new Variable(
    'SoC',
    '%',
    false,
    'tabler:percentage',
    '#84cc16'
  );

  private constructor(
    // @ts-ignore
    readonly label: string,
    // @ts-ignore
    readonly unit: string,
    // @ts-ignore
    readonly space: boolean,
    // @ts-ignore
    readonly icon: string,
    readonly color: string
  ) {}
}

export function getBatteryFill(soc: number): [string, string] {
  if (soc >= 0 && soc < 45) {
    return ['bg-battery-low', 'bg-red-900'];
  }
  if (soc >= 45 && soc < 75) {
    return ['bg-battery-medium', 'bg-yellow-900'];
  }
  if (soc >= 75 && soc <= 100) {
    return ['bg-battery-high', 'bg-green-900'];
  }
  throw Error("Props 'soc' out of bounds");
}

export function getBatteryColor(soc: number): string {
  if (soc >= 0 && soc < 25) {
    return '#ef4444';
  }
  if (soc >= 25 && soc < 40) {
    return '#f59e0b';
  }
  if (soc >= 40 && soc < 75) {
    return '#fbbf24';
  }
  if (soc >= 75 && soc < 85) {
    return '#A3CB38';
  }
  if (soc >= 85 && soc <= 100) {
    return '#84cc16';
  }
  throw Error("Props 'soc' out of bounds");
}
