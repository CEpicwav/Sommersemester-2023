var L10_Luftfahrt_Classes;
(function (L10_Luftfahrt_Classes) {
    class Aviator extends L10_Luftfahrt_Classes.Moveable {
        color;
        constructor(_pos, _vel, _color) {
            super(_pos, _vel);
            this.color = _color;
            // this.size = _size;
        }
        /**
         * draw
         */
        draw() {
        }
    }
    L10_Luftfahrt_Classes.Aviator = Aviator;
})(L10_Luftfahrt_Classes || (L10_Luftfahrt_Classes = {}));
//# sourceMappingURL=Aviator.js.map