

class Circle{
  constructor(radius){
    this.radius = radius
    this._diameter = radius * 2
    this._circumference = Math.PI * this._diameter
    this._area = Math.PI * Math.pow(this.radius, 2)
  }

  set diameter(diameter){
    this._diameter = diameter
    this.radius = this.diameter / 2
    this._circumference = Math.PI * this._diameter
    this.area = Math.PI * Math.pow(this.radius, 2)
  }

  get diameter(){
    return this._diameter
  }

  set circumference(circumference){
    this._circumference = circumference
    this._diameter = this._circumference / Math.PI
    this.radius = this._diameter / 2
    this._area = Math.PI * Math.pow(this.radius, 2)
  }

  get circumference(){
    return this._circumference
  }

  set area(area){
    this._area = area
    this.radius = Math.sqrt( this._area / Math.PI )
    this._diameter = this.radius * 2
    this._circumference = this._diameter * Math.PI
  }

  get area(){
    return this._area
  }


}
