namespace L10_Luftfahrt_Classes {

    export class Aviator extends Moveable{

        public color: string;

        constructor(_pos: Vector, _vel: Vector, _color: string) {
            super(_pos, _vel)
            this.color = _color;
            // this.size = _size;
        }


        /**
         * draw
         */
        public draw() {
            
        }
    }
}