export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string | number,
        geo: {
            lat: number | string,
            lng: number | string
        }
    },
    phone: string | number,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}