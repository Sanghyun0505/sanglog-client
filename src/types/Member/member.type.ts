export interface MemberType {
  id: number;
  userId: string;
  password: string;
  role: "MEMBER" | "ADMIN";
}
