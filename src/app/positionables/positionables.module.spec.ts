import { PositionablesModule } from './positionables.module';

describe('PositionablesModule', () => {
  let positionablesModule: PositionablesModule;

  beforeEach(() => {
    positionablesModule = new PositionablesModule();
  });

  it('should create an instance', () => {
    expect(positionablesModule).toBeTruthy();
  });
});
