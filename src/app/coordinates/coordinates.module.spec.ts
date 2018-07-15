import { CoordinatesModule } from './coordinates.module';

describe('CoordinatesModule', () => {
  let coordinatesModule: CoordinatesModule;

  beforeEach(() => {
    coordinatesModule = new CoordinatesModule();
  });

  it('should create an instance', () => {
    expect(coordinatesModule).toBeTruthy();
  });
});
