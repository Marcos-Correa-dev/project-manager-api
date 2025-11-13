import { Injectable } from '@nestjs/common';
import { GetUsersByEmailService } from '../../domain/use-cases/users/get-users-by-email.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly getUserByEmailUserCase: GetUsersByEmailService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.getUserByEmailUserCase.execute(email);

    const isValidUser = await compare(password, user.password);
    if (!isValidUser) {
      throw new Error('Invalid credentials');
    }
    const payload = { sub: user.id, username: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
