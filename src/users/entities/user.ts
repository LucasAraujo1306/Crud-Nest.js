/* eslint-disable prettier/prettier */
export class User {
  private nome: string;
  private email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setNome(nome: string) {
    this.nome = nome;
  }
}
