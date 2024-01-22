type Role = "admin" | "user" | "super-admin";
enum UserRole {
  ADMIN,
  USER,
  SUPER_ADMIN,
}

// Pick
// Omit

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
}

type CreateUserDto = Pick<User, "firstName" | "lastName" | "role">;
type UpdateUserDto = Omit<User, "role">;

type PartialUser = Partial<User>;
type RequiredUser = Required<PartialUser>;
type ReadonlyUser = Readonly<User>;

interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: UserRole;
}

export const defaultUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  role: UserRole.ADMIN,
};

// if (role === Role.ADMIN) {
//  //
// }

// <User user={user} role="admin" />
