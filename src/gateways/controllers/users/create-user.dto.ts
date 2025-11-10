import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome precisa ser definido' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'O último precisa ser definido' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'O email precisa ser definido' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'O password precisa ser definido' })
  @IsString()
  password: string;
}
