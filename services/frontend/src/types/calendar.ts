import { WorkType } from 'src/types/workType'
import { Timestamp } from '@quasar/quasar-ui-qcalendar'

export interface EventItem {
  id: string
  dow: number
  dom: number
  range?: number
  title: string
  date: string
  start: string
  end: string
  bgColor?: string
  worker: any
  workType: WorkType | null,
  activity: Activity
}

export interface Activity {
  id: string
  workerId: string
  start: string
  end: string
  name?: string
  taskId?: string
  orderId?: string
}

export interface Resource {
  id: string
  name: string
  expanded?: boolean
  children?: Resource[]
}

export interface Scope {
  resource: any
  cellWidth: string,
  timestamps: Timestamp[]
}

export interface Event {
  id: string
  title: string
  activity: Activity,
  start: string
  end: string
  time?: string
  duration?: number
  bgColor?: string
  icon?: string
}

export interface DisplayedEvent {
  id?: string
  left?: number
  right?: number
  size: number
  event?: Event | undefined
  meta?: object | undefined
}

export type LinkItem = {
  index: string;
  from: string;
  to: string;
  color?: string | undefined;
}
