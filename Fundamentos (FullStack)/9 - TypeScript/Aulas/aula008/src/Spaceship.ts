class Spaceship {
    private _name: string;
    protected captain: string;
    protected speed: number;

    constructor(name: string, captain: string) {
        this._name = name
        this.captain = captain
        this.speed = 0
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    public accelerate(rate: number, time: number) {
        this.speed = rate * time
    }

    public erase() {
        this.captain = ''
        this.speed = 0
    }
}

class Fighter extends Spaceship {
    weapons: number;
    constructor(name: string, captain: string, weapons: number) {
        super(name, captain)
        this.weapons = weapons
    }

    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!')
        }
    }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 9)

ship.accelerate(50, 10)

ship.weapons = 10;
ship.erase();
ship.name = "mateus";