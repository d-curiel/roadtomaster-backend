import { Test, TestingModule } from '@nestjs/testing';
import { AttributeKindController } from './attribute-kind.controller';

describe('AttributeKindController', () => {
  let controller: AttributeKindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttributeKindController],
    }).compile();

    controller = module.get<AttributeKindController>(AttributeKindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
