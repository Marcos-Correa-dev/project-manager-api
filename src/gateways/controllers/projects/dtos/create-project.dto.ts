import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty({ message: 'O nome do projeto precisa de ser definido' }) //faz validação em tempo de requisição dop controller (utilização tanto em caso de uso quanto em controller)
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'A descrição do projeto precisa de ser definida' })
  @IsString()
  description: string;
}
