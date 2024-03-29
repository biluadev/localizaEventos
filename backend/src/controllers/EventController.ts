import { NextFunction, Request, Response } from "express";
import { EventUseCase } from "../useCases/EventUseCase";

class EventController {
    constructor(private eventUseCase: EventUseCase) {}
    async create(request: Request, response: Response, next: NextFunction) {
        let eventData = request.body;
        const files = request.files as any;

        if(files) {
            const banner = files.banner[0];
            const flyers = files.flyers;

            eventData = {
                ...eventData,
                banner: banner.filename,
                flyers: flyers.map((flyer: any) => flyer.filename),
            };
        }

        try {
            await this.eventUseCase.create(eventData);
            return response
            .status(201)
            .json({ message: "Evento criado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

    async findEventByLocation(
        request: Request, 
        response: Response, 
        next: NextFunction,
        ) {
        const { latitude, longitude } = request.query

        try {
            const events = await this.eventUseCase.findEventByLocation(
                String(latitude),
                String(longitude)
            );
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }

    async findEventsByCategory(
        request: Request, 
        response: Response, 
        next: NextFunction
        ) {
        const { category } = request.params

        try {
            const events = await this.eventUseCase.findEventsByCategory(
                String(category),
            )
            return response.status(200).json(events)
        } catch (error) {
            next(error);
        }
    }

    async findMainEvents(
        request: Request, 
        response: Response, 
        next: NextFunction
        ) {

        try {
            const events = await this.eventUseCase.findEventsMain()
            return response.status(200).json(events)
        } catch (error) {
            next(error);
        }
    }

    async findEventsByName(
        request: Request, 
        response: Response, 
        next: NextFunction
        ) {
        const { name } = request.query

        try {
            const events = await this.eventUseCase.findEventsByName(
                String(name),
            )
            return response.status(200).json(events)
        } catch (error) {
            next(error);
        }
    }

    async findEventsById(
        request: Request, 
        response: Response, 
        next: NextFunction
        ) {
        const { id } = request.params

        try {
            const events = await this.eventUseCase.findEventsById(
                String(id),
            )
            return response.status(200).json(events)
        } catch (error) {
            next(error);
        }
    }

    async addParticipant(
        request: Request, 
        response: Response, 
        next: NextFunction
        ) {

        const { name, email } = request.body
        const { id } = request.params

        try {
            const events = await this.eventUseCase.addParticipant(id, name, email)
            return response.status(200).json(events)
        } catch (error) {
            next(error);
        }
    }
}

export { EventController }