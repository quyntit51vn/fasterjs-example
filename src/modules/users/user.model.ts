import { AbstractModel, BelongTo, Column, Model, Role } from "@fasterjs/core";

@Model()
export class User extends AbstractModel<User> {
    @Column("The name of User", { isRequire: true, isPrimaryKey: true })
    id!: number;

    @Column("The name of User", { isRequire: true })
    name!: string;

    @Column("The email name of User", { isRequire: true, unique: true })
    email!: string;

    @Column("The password of user", {
        isPassword: true,
        isRequire: true
    })
    password!: string;

    @Column("The id of role", { isRequire: true})
    roleId!: string;

    @BelongTo({
        model: () => Role,
        column: "roleId",
    })
    role!: Role
}

