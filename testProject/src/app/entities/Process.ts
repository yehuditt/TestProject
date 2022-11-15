export interface IProcess {
    superClaim: {
        superClaimNum: number;
        superClaimStatus: {
            code: number;
            value: string;
        };
    	superClaimType : {
            code : number; 
            value : string;
        };
	eventDate: number;
       claimCause: {
            code : number;
            value : string;
        };
       injuryType: {
            code : number;
            value : string
        };
	submitedBy: number;
	submitionMethod: {
            code : number;
            value : string;
        };
    };
    insured: {
        address: {
            cityName: string;
            streetName: string;
        };
        identityType: number;
        age: number;
        lastName: string;
        identity: number;
        firstName: string;
    };
    contactPersons: [{
        id: number;
        deliveryFlag: boolean;
        type: {
            code: number;
            value: string;
        }
        name: string;
        phoneNumber: number;
        email: string;
        address: string;
    }];
}