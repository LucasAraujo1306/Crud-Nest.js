import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O campo nome é obrigatário' })
  nome: string;

  @IsNotEmpty({ message: 'O campo email é obrigatário' })
  @IsEmail({}, { message: 'O email precisa ter um formato válido' })
  email: string;
}
