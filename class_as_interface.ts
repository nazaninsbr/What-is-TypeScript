class Point {
    x: number; 
    y:number; 
}

interface Point3d extends Point{
    z: number;
}

let point3d: Point3d = {x:12, y:33, z:3};
