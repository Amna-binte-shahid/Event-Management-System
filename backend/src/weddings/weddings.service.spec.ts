import { Test, TestingModule } from '@nestjs/testing';
import { WeddingsService } from './weddings.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Wedding } from './entity/wedding.entity';

describe('WeddingsService', () => {
  let service: WeddingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeddingsService,
        {
          provide: getRepositoryToken(Wedding),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            remove: jest.fn(),
            createQueryBuilder: jest.fn(() => ({
              where: jest.fn().mockReturnThis(),
              orderBy: jest.fn().mockReturnThis(),
              getMany: jest.fn().mockResolvedValue([]),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<WeddingsService>(WeddingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
