module.exports = (req, res, next) => {
  console.log(req);
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "gqf" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "token",
        },
      });
    } else {
      return res.status(400).json({
        message: "username or password wrong",
      });
    }
    next();
  }
};
