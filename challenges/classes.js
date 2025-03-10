// 1. Copy and paste your prototype in here and refactor into class syntax.

class NewCuboidMaker {
  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  };

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
}

const newCuboid = new NewCuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

class CubeMaker extends CuboidMaker {
  constructor(cubeAttrs) {
    super(cubeAttrs);
  }

  cubeVolume() {
    return Math.pow(this.length, 3);
  }
  cubeSurface() {
    return 6 * (Math.pow(this.length, 2));
  }
}

const cube = new CubeMaker({
  length:  15
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.cubeVolume());
console.log(cube.cubeSurface());