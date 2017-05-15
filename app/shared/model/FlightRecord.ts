export interface FlightRecord{
    id: number;
    airline: string;
    flightNumber: string;
    key : string;
    airportCode  : string;
    airlineCode  : string;
    adi : string;
    scheduled : string;
    estimated : string;
    status : string;
    statusText : string;
    gate : string;
    lastUpdate : number;
    city : string;
}
