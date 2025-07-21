import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import AppError from "../middleware/error.js";
import { IncorrectCredentials } from "../middleware/error.js";

class UserService {
  constructor() {}
  async register(email, password, username) {
    /*
1. get email, password /
2. check if already registered /
3. hashpassword, /
4. create user / 
5. create access Token /
6. send response /
*/
    let doesUserExist = !!(await User.findOne({ email }));
    if (doesUserExist) throw new AppError("user already registered");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    let user = new User({ email, password: hash, username });
    await user.save();
    const token = config.jwt.accessToken;
    const accessToken = jwt.sign({ id: user._id }, token.secret, {
      expiresIn: token.exp,
    });
    console.log("user created succesfully");
    return {
      user,
      tokens: {
        accessToken: {
          token: accessToken,
          exp: token.exp,
        },
      },
    };
  }

  async login(email, password) {
    let user = await User.findOne({ email });
    if (!user) throw new IncorrectCredentials("incorrect credentials");
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) throw new AppError("incorrect credentials");
    const { accessToken: token } = config.jwt;
    const accessToken = jwt.sign({ id: user._id }, token.secret, {
      expiresIn: token.exp,
    });
    console.log("user is logged in succesfully");

    return {
      user,
      tokens: {
        accessToken: {
          token: accessToken,
          exp: token.exp,
        },
      },
    };
  }
}

export default Object.freeze(new UserService());
// export default UserService;
