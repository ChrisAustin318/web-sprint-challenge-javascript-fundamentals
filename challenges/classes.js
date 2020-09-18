// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
  }  
  volume = function(volume){
    volume = this.length * this.width * this.height;
      return volume;
  }
  surfaceArea = function(area){
    area = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      return area;
  }
} 
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  })


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(cubeAttributes){
        super(cubeAttributes)
    }
    volume = function(volume){
        volume = this.length * this.length * this.length;
        return volume;
    }
    surfaceArea = function(area){
        area = 6 * (this.length *this.length);
        return area;
    }
}
const cube = new CuboidMaker({
    length: 5,
    width: 5,
    height: 5,
})