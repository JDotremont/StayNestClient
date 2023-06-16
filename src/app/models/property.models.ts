export interface Property {
    id: number;
    name: string;
    stars: number;
    numberOfGuests: number;
    address: string;
    location: string;
    description: string;
    priceByNight: number;
    priceByWeek: number;
    cleaningFee: number;
    photos: string | null;
    numberOfRoom: number;
    numberOfBathroom: number;
    amenities: string | null; 
    status: string;
    houseRules: string | null; 
    allowChildren: boolean;
    allowPets: boolean;
    allowSmoking: boolean;
    allowParties: boolean;
    checkinTime: Date; 
    checkoutTime: Date; 
    minNight: number;
    maxNight: number;
    propertyType: string;
    roomType: string;
    userId: number;
}
