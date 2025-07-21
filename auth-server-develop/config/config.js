import dotenv from 'dotenv';
dotenv.config();
export default {

    port:process.env.PORT|| 2002,
    env:process.env.ENVIRONMENT|| 'development',
    database:{
        mongoDb:{
            url:process.env.MONGO_URI,
        }
    },
    jwt:{
        accessToken:{
         secret:process.env.ACCESS_TOKEN_SECRET,
         exp:'15m'
        }
    }
}





