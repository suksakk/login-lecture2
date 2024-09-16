"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home"); // ./ -> 현재 폴더에서 ./routes/ 폴더에서 ./routes/home 에 있는 자바스크립트를 읽어달라는 경로표시

// app 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
