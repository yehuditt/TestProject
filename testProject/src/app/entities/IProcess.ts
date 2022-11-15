import { IContact } from "./IContact";

export interface IProcess {
    superClaim: {
        superClaimNum?: number;
        superClaimStatus: {
            code?: number;
            value?: string;
        };
    	superClaimType? : {
            code ?: number; 
            value ?: string;
        };
	eventDate: number|null;
       claimCause?: {
            code ?: number;
            value ?: string;
        };
       injuryType?: {
            code ?: number;
            value? : string
        };
	submitedBy?: number|null;
	submitionMethod?: {
            code ?: number;
            value ?: string;
        };
    };
    insured: {
        address: {
            cityName?: string;
            streetName?: string;
        };
        identityType?: number;
        age?: number;
        lastName?: string;
        identity?: number;
        firstName?: string;
    };
    contactPersons: IContact[];
}