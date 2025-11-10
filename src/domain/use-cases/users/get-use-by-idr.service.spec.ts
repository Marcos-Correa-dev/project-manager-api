import { Test, TestingModule } from '@nestjs/testing';
import { GetUseByIdrService } from './get-use-by-id.service';

describe('GetUseByIdrService', () => {
  let service: GetUseByIdrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUseByIdrService],
    }).compile();

    service = module.get<GetUseByIdrService>(GetUseByIdrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
