var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var index_copyRouter = require("./routes/index_copy");
var usersRouter = require("./routes/users");
var nopeRouter = require("./routes/nope");
const nop2Router = require("./routes/nop2");
const error404Router = require("./routes/");
const lineNotifyLibs = require("./libs/lineNotify");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/nope", nopeRouter);
app.use("/copy", index_copyRouter);
app.use("/nop2", nop2Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    lineNotifyLibs.lineNotify(3, "Conntect is failed : Not found 404");
    res.send("Conntect is failed : Not found 404");
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;