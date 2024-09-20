export class LoginResponse 
{ 
    message!: string;
    result!: boolean;
    data!: {
        userId: BigInteger;
        emailId : string;
        token: string;
        refreshToken: string;
    }
}
