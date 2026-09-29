class ParkingSystem {
    b;
    m;
    s;

    constructor(big: number, medium: number, small: number) {
        this.b = big
        this.m = medium
        this.s = small
    }

    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                if (this.b === 0) {
                    return false;
                }
                this.b--;
                break
            case 2:
                if (this.m === 0) {
                    return false;
                }
                this.m--;
                break
            case 3:
                if (this.s === 0) {
                    return false;
                }
                this.s--;
                break
        }
        return true
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */