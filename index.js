
const PI = Math.PI

class Circle{


  constructor(radius){
    this.radius = radius
  }

  set diameter(diameter){
    this._diameter = diameter
    this.radius = this._diameter / 2
  }

  get diameter(){
    return this.radius * 2
  }

  set circumference(circumference){
    this._circumference = circumference
    this.diameter = this._circumference / PI
  }

  get circumference(){
    return this.diameter * PI
  }

  set area(area){
    this._area = area
    this.radius = Math.sqrt( this._area / PI )
  }

  get area(){
    return PI * Math.pow(this.radius, 2)
  }


}
