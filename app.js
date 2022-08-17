// Slider
$(document).ready(function(){
    $('.slider__image').slick({
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class='ti-arrow-left'></i></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><i class='ti-arrow-right'></i></button>`
    });
  });

// Menu Button
const openBtn = document.querySelector('.js-open-menu')
const closeBtn = document.querySelector('.js-close-menu')
const head = document.querySelector('#header')
const menu = document.querySelector('.menu-respone')

function showMenu() {
    openBtn.classList.add('close')
    closeBtn.classList.add('open')
    head.classList.add('gray')
    menu.classList.add('open')
}

function hideMenu() {
    openBtn.classList.remove('close')
    closeBtn.classList.remove('open')
    head.classList.remove('gray')
    menu.classList.remove('open')
}

openBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', hideMenu)

// Content Animation
const leftRun1 = document.querySelector('.left-content1')
const rightRun1 = document.querySelector('.right-content1')
const leftRun2 = document.querySelector('.left-content2')
const rightRun2 = document.querySelector('.right-content2')
const leftRun3 = document.querySelector('.left-content3')
const rightRun3 = document.querySelector('.right-content3')

const runFade = (e)=>{
    if(window.scrollY > 600) {
        leftRun1.classList.add('run')
        rightRun1.classList.add('run')
    }
    if(window.scrollY > 1200) {
        leftRun2.classList.add('run')
        rightRun2.classList.add('run')
    }
    if(window.scrollY > 1800) {
        leftRun3.classList.add('run')
        rightRun3.classList.add('run')
    }
}

document.addEventListener('scroll', runFade)

//form login
const loginBtn = document.querySelector('.js-login')
const loginForm = document.querySelector('.form1')
const regisForm = document.querySelector('.form2')
const closeLoginBtn = document.querySelector('.js-close-login')
const closeRegisBtn = document.querySelector('.js-close-regis')
const openRegis = document.querySelector('.js-open-regis')
const openLogin = document.querySelector('.js-open-login')

function openFormLogin() {
    loginForm.classList.add('open')
}

function closeFormLogin() {
    loginForm.classList.remove('open')
}

function closeFormRegis() {
    regisForm.classList.remove('open')
}

function showRegis() {
    regisForm.classList.add('open')
    loginForm.classList.remove('open')
}

function showLogin() {
    regisForm.classList.remove('open')
    loginForm.classList.add('open')
}

loginBtn.addEventListener('click', openFormLogin)
closeLoginBtn.addEventListener('click', closeFormLogin)
closeRegisBtn.addEventListener('click', closeFormRegis)
openRegis.addEventListener('click', showRegis)
openLogin.addEventListener('click', showLogin)

//Local Storage
const signupBtn = document.querySelector('.js-signup')
const signinBtn = document.querySelector('.js-signin')
const logoutBtn = document.querySelector('.js-logout')
const loginUser = document.querySelector('.login-success')



function saveData() {
    let email = document.querySelector('.regis-email').value;
    let userName = document.querySelector('.regis-name').value;
    let passWord = document.querySelector('.regis-pass').value;
    let confirmPass = document.querySelector('.regis-confirm').value;

    var account = {
        Email : email,
        Username : userName,
        Password : passWord,
    }

    var json = JSON.stringify(account);

    if(confirmPass === passWord){
        localStorage.setItem(userName, json);
        alert('Đăng ký thành công')
        regisForm.classList.remove('open')
        loginForm.classList.add('open')
        document.querySelector('.login-name').value = userName
        document.querySelector('.login-pass').value = passWord
        document.querySelector('.regis-email').value = ""
        document.querySelector('.regis-name').value = ""
        document.querySelector('.regis-pass').value = ""
        document.querySelector('.regis-confirm').value = ""
    }
    else {
        alert('Mật khẩu nhập lại không khớp với mật khẩu đã nhập')
        return
    }
}

function successLogin() {
    let userName = document.querySelector('.login-name').value;
    let passWord = document.querySelector('.login-pass').value;
    var account = localStorage.getItem(userName);
    var data = JSON.parse(account);

    if(userName == data.Username && passWord == data.Password) {
        alert('Đăng nhập thành công')
        loginForm.classList.remove('open')
        loginBtn.classList.add('open')
        logoutBtn.classList.add('open')
        loginUser.classList.add('open')
        document.querySelector('.login-name').value = ""
        document.querySelector('.login-pass').value = ""
    }
    else {
        alert('Thông tin tài khoản mật khẩu không chính xác')
        return
    }
}

function logOut() {
    loginBtn.classList.remove('open')
    logoutBtn.classList.remove('open')
    loginUser.classList.remove('open')
    alert('Đăng xuất thành công')
}

signupBtn.addEventListener('click', saveData)
signinBtn.addEventListener('click', successLogin)
logoutBtn.addEventListener('click', logOut)
