import { FieldModule } from './field.module';

describe('FieldModule', () => {
  let fieldModule: FieldModule;

  beforeEach(() => {
    fieldModule = new FieldModule();
  });

  it('should create an instance', () => {
    expect(fieldModule).toBeTruthy();
  });
});
