import { rest } from "msw";

const baseURL = "https://drfi-api-a41e37271e42.herokuapp.com/"

export const handlers = [
    rest.post(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json(
            {"pk":4,
            "username":"user4",
            "email":"",
            "first_name":"",
            "last_name":"",
            "profile_id":4,
            "profile_image":"https://res.cloudinary.com/dx3tbsinf/image/upload/v1/media/images/logo-brand1_uwz9q7",
            }
        ));
      }),
      rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
      })
];