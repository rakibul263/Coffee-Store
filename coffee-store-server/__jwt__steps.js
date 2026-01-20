/*
* simple but not the best way
  1. from client side send information.
  2. generate token jwt.sign()
  3. on the client side set token to the localstorage.
*/
/*
 * for create a token "require('crypto').randomBytes(64).toString('hex')"
 */

/*
* using http only cookies.
  1. from client side send the information like email, firebase auth token. here, firebase auth token is more secure then email.
  2. on the server side accept the information and if needed validate it
  3. generate token in the server side

  --------
  set the cookies
  1. while calling the api tell use withCredentials
      axios.post("http://localhost:3000/jwt", userData, {
              withCredentials: true,
            })

  2. In the cors setting set credential and origin
      app.use(
        cors({
          origin: ["http://localhost:5173"],
          credentials: true,
        }),
      );

  3. after generating the token set it to the cookies
      res.cookie("token", token, {
          httpOnly: true, // must
          secure: true,
          sameSite: true,
        });
*/
