// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius 
    }

    get diameter() {
        return (this.radius * 2)
    }

    get circumference() {
        return (Math.PI * this.diameter)
    }

    get area() {
        return (Math.PI * (this.radius ** 2))
    }

    set diameter(diameter) {
        let radius = (diameter/2)
        this.radius = radius 
    }

    set circumference(circumference) {
        let radius = (circumference/(2 * Math.PI))
        this.radius = radius 
    }

    set area(area) {
       let radius = Math.sqrt((area/Math.PI))
       this.radius = radius 
    }

}
