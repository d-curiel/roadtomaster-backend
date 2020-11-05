import { Test, TestingModule } from '@nestjs/testing';
import { AttributeKindService } from './attribute-kind.service';

describe('AttributeKindService', () => {
  let service: AttributeKindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributeKindService],
    }).compile();

    service = module.get<AttributeKindService>(AttributeKindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
