import { inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions } from '@angular/http';
import {FidsInfoService} from "./fids-info.service";
import {FlightRecord} from "../shared/model/FlightRecord";

describe("fids-info-Service", () => {

    let subject: FidsInfoService;
    let backend: MockBackend;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                FidsInfoService
            ]
        });
    });

    beforeEach(inject([FidsInfoService, MockBackend], (FidsInfoService: FidsInfoService, mockBackend: MockBackend) => {
        subject = FidsInfoService;
        backend = mockBackend;
    }));


    it("#login should call endpoint and return it's result", (done) => {
        backend.connections.subscribe((connection: MockConnection) => {
            var options = new ResponseOptions({
                body: [
                    {
                        "airline": "EasyJet",
                        "flightNumber": "1234",
                        "key": "key",
                        "airportCode":"MIA",
                        "airlineCode": "EZY",
                        "adi": "D",
                        "scheduled": "SCHED",
                        "estimated": "ETA",
                        "status": "IN",
                        "statusText": "IN AIR",
                        "gate": "D4",
                        "city": "London",
                    }
                ]
            });

            connection.mockRespond(new Response(options));
            expect(connection.request.method).toEqual(RequestMethod.Get);
            expect(connection.request.url).toEqual("https://flightnodeservice-azoideftms.now.sh/flights");

        });

        subject
            .getAll()
            .subscribe((flightRecord: FlightRecord[]) => {
                expect(flightRecord.length).toBe(1);
                expect(flightRecord[0].airline).toEqual("EasyJet");
                expect(flightRecord[0].flightNumber).toEqual("1234");
                expect(flightRecord[0].key).toEqual("key");
                expect(flightRecord[0].airportCode).toEqual("MIA");
                expect(flightRecord[0].airlineCode).toEqual("EZY");
                expect(flightRecord[0].adi).toEqual("D");
                expect(flightRecord[0].scheduled).toEqual("SCHED");
                expect(flightRecord[0].estimated).toEqual("ETA");
                expect(flightRecord[0].status).toEqual("IN");
                expect(flightRecord[0].statusText).toEqual("IN AIR");
                expect(flightRecord[0].gate).toEqual("D4");
                expect(flightRecord[0].adi).toEqual("D");
                expect(flightRecord[0].city).toEqual("London");
                done();
            });
    });
});