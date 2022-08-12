export interface userdetails{
    address: {
        geolocation: {
          lat: number,
          long: number
        },
        city: string,
        street: string,
        number: number,
        country : string,
        zipcode: number
      },
      id: number,
      email: string,
      username: string,
      password: string,
      name: {
        firstname : string,
        lastname : string
      },
      phone: number,
      image: string,
      admin: boolean
}