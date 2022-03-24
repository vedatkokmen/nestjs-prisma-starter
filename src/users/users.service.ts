import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Prisma } from '@prisma/client';
import { DBService } from './../db.service';

@Injectable()
export class UsersService {
  constructor(private dbService: DBService) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.dbService.user.create({ data: createUserDto });
  }

  findAll(): Promise<User[]> {
    return this.dbService.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.dbService.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.dbService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number): Promise<User> {
    return this.dbService.user.delete({ where: { id } });
  }
}
