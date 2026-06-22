import { Test, TestingModule } from '@nestjs/testing';
import { WeddingsController } from './weddings.controller';
import { WeddingsService } from './weddings.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Wedding } from './entity/wedding.entity';

describe('WeddingsController', () => {
  let controller: WeddingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeddingsController],
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

    controller = module.get<WeddingsController>(WeddingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
