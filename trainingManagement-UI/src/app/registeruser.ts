export class Registeruser {
    constructor(
        public UserName: string,
        public Password: string,
        public Mobile: number,
        public Email: string,
        public Address: string,
        public Address2: string,
        public City: string,
        public State: string,
        public Zip: number,
        public IsActive: boolean,
        public CreatedDate: string,
        public UpdatedDate: string,
        public Role:string
    ){}
}
