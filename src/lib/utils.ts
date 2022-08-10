import { format } from 'date-fns';
import React from 'react';
import { Data } from './battery';
import { ModuleData } from './module';
// sample API
import RealtimeJson from '../realtime.json';
import HistoricalJson from '../historical.json';

export interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function round(num: number, fractionDigits: number = 2) {
  const factor = Math.pow(10, fractionDigits);
  return Math.round(num * factor) / factor;
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export async function fetchRealtime() {
  // const response = await fetch(
  //   `${process.env.REACT_APP_DATA_PROVIDER}/realtime`
  // );
  // return (await response.json()) as Data;
  const data = RealtimeJson as Data;
  return data;
}

// export async function fetchHistorical(0) {
export async function fetchHistorical(module: number) {
  // const response = await fetch(
  //   `${process.env.REACT_APP_DATA_PROVIDER}/historical?modul=${module}`
  // );
  // return (await response.json()) as ModuleData;
  console.log(module);
  const data = HistoricalJson as ModuleData;
  return data;
}

export function timestampFormatter(timestamp: number) {
  return format(timestamp, 'HH:mm');
}
