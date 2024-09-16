"use strict";

const home = (req, res) => { // 이크마 문법
    // 기능
    res.render("home/index");
};
// 위 아래가 같은 의미의 코드
// function hello (req, res) {
//     res.render("home/index");
// }

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    home,
    login,
};

// {key : value} 키 갑쌍 대신 키값만 넣어주면 자체적으로 키와 같은 값을 넣어준다.
// hello: hello, login: login과 같다