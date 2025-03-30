import { Ref } from 'vue'

export class Timer {
  private time: Ref
  private _timerId: any

  constructor (time: Ref) {
    this.time = time
    this._timerId = null
  }

  start (): void {
    this.time.value = 0
    this._timerId = setInterval(() => {
      this.time.value++
    }, 1000)
    console.log('timer start', this._timerId)
  }

  stop (): void {
    this._timerId && clearInterval(this._timerId)
    console.log('timer stop', this._timerId)
  }
}
