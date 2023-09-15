export interface LoginFormInputs {
    username: string
    password: string
}


export interface InsideTicketDetailsProps {
        boarding: string
        class: string
        dst: {
            airline: string
            country: string
            iso3: string
            time: string
        }
        gates: number
        logoSrc: string
        logoStyle: {
            height: string
            margin: string
        }
        price: string
        seat: string
        transfer: boolean
        src: {
            airline: string
            country: string
            iso3: string
            time: string
        }
}


export interface OutsideTicketDetailsProps {
    flightClass:string
    price:string
    dst: {
        airline: string
        country: string
        iso3: string
        time: string
    }
    src: {
        airline: string
        country: string
        iso3: string
        time: string
    }
    logoStyle: {
        height: string
        margin: string
    }
    logoSrc:string
}