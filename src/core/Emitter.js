export class Emitter {
    constructor() {
        this.listerners = {}
    }
    // Уведомляем слушателей, если они есть
    emit(event, ...args) {
        if (!Array.isArray(this.listerners[event])) {
            return false
        }
        this.listerners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }
    // Подписываемся на уведомление или добавление нового слушателя
    subscribe(event, fn) {
        this.listerners[event] = this.listerners[event] || []
        this.listerners[event].push(fn)
        return () => {
            this.listerners[event] =
                this.listerners[event].filter(listener => listener !== fn)
        }
    }
}