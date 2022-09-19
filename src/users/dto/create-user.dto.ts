import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'user@mail.ru', description: 'Email'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: 'Некорректный email'})
  readonly email: string

  @ApiProperty({example: '12345678', description: 'Password'})
  @Length(4, 8, {message: 'Не меньше 4 и не больше 8 символов'})
  @IsString({message: 'Должно быть строкой'})
  readonly password: string
}