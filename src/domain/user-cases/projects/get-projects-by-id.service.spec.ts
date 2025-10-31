import { Test, TestingModule } from '@nestjs/testing';
import { GetProjectsByIdService } from './get-projects-by-id.service';

describe('GetProjectsByIdService', () => {
  let service: GetProjectsByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProjectsByIdService],
    }).compile();

    service = module.get<GetProjectsByIdService>(GetProjectsByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
