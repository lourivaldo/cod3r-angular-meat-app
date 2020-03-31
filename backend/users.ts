export class User {
  constructor(public email: string,
              public name: string,
              private password: string) { }

  matches(other: User): boolean {
    return this.email === other.email && this.password === other.password
  }
}

export const users: {[key:string]: User} = {
  "loro@gmail.com": new User("loro@gmail.com", "loro", "1234"),
  "isla@gmail.com": new User("isla@gmail.com", "isla", "5678")
};
