// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }

    set diameter(d) {
        this.radius = d / 2
    }

    set circumference(c) {
        this.radius = (c / Math.PI) / 2
    }

    set area(a) {
        this.radius = Math.sqrt(a / Math.PI)
    }
}