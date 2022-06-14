export interface ExistsByUserNamePort {
    existsByUserName(username: string): Promise<boolean>;
}

export const ExistsByUserNamePortToken = "ExistsByUsernamePort";
