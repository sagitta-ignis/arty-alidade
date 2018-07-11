export enum Role {
  Target,
  Spotter,
  Artillery
}

export enum ArtilleryType {
  Unmoving = 1,

  Mortar = 2,
  FieldArtillery = 4,
  Gunboat = 8,
  Tank = 16,

  Howitzer = 3
}

interface IPositionable {
  id: number;
  name: string;
  role: Role;
  movable: boolean;
}

class Positionable implements IPositionable {

  constructor(
    public id: number,
    public name: string,
    public role: Role,
    public movable: boolean,
  ) {

  }
}

export class Target extends Positionable {
  constructor(
    id: number,
    name: string,
    movable: boolean,
  ) {
    super(id, name, Role.Target, movable);
  }
}

export class Spotter extends Positionable {
  constructor(
    id: number,
    name: string
  ) {
    super(id, name, Role.Spotter, true);
  }
}

export class Artillery extends Positionable {

  public type: string;

  constructor(
    id: number,
    name: string,
    type: ArtilleryType,
    public shells: number
  ) {
    // tslint:disable-next-line:no-bitwise
    super(id, name, Role.Artillery, (type & ArtilleryType.Unmoving) !== ArtilleryType.Unmoving);
    this.type = ArtilleryType[type];
  }
}

export const field = new Map<number, IPositionable>();
export const targets = [];
export const artilleries = [];
export const spotters = [];

const addToField = (positionable: IPositionable) => {
  field.set(positionable.id, positionable);
  switch (positionable.role) {
    case Role.Target: targets.push(positionable); return;
    case Role.Spotter: spotters.push(positionable); return;
    case Role.Artillery: artilleries.push(positionable); return;
  }
};

addToField(new Spotter(1, 'Ikyran'));
addToField(new Spotter(1, 'Boumboum'));

addToField(new Target(1, 'Saltbrook', false));
addToField(new Target(2, 'Tank #1', true));

addToField(new Artillery(1, 'Krou', ArtilleryType.FieldArtillery, 13));
addToField(new Artillery(2, 'Padaone', ArtilleryType.Mortar, 3));


