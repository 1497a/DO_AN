let accountusers = [{
        email: "duckienmai@gmail.com",
        sdt: "0123456789",
        diachi: "An Dương Vương- quận 5",
        name: "Mai Đức Kiên",
        password: "123456",
    }, {
        email: "daiphuoc1497@gmail.com",
        sdt: "0984253741",
        diachi: "Trường Chinh- quận Tân Bình",
        name: "Hoàng Đại Đại Phước",
        password: "123456",
    },
    {
        email: "minhquan@gmail.com",
        sdt: "0320667891",
        diachi: "Lý Thường Kiệt- quận 3",
        name: "Nguyễn Cao Mình Quân",
        password: "123456",
    }
];
let admins = [{
        email: "admin1@admin.com",
        password: "111111",
    },
    {
        email: "admin2@admin.com",
        password: "222222",
    },
    {
        email: "admin3@admin.com",
        password: "333333",
    }
]
var account = localStorage.getItem('accountusers');
if (account == null) {
    localStorage.setItem('accountusers', JSON.stringify(accountusers));
}

function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;

        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
        } else {
            errorElement.innerText = '';
        }
        console.log(errorMessage);

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }

            });
            if (isFormValid) {
                var enableInputs = formElement.querySelectorAll('[name]:not([name="cpassword"])');
                var formValues = Array.from(enableInputs).reduce(function(values, input) {

                    return (values[input.name] = input.value) && values;

                }, {});
                if (options.form == '#register') {
                    addAcount(formValues);
                }
                formElement.submit();
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function(inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                }
            });
        });
    }

}


Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập '
        }
    };
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Không Phải Là Email';
        }
    };
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

function addAcount(account) {
    accountusers.push(account);
    localStorage.setItem("accountusers", JSON.stringify(accountusers));
}

function checkSignIn() {
    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;
    var errorMessage = document.getElementById('form-message');
    var accountuser = localStorage.getItem('accountusers');
    accountuser = JSON.parse(accountuser);
    if (password && email) {
        for (let i = 0; i < admins.length; i++)
            if (email === admins[i].email) {
                if (password === admins[i].password) {

                    localStorage.setItem('issignin', 1);
                    localStorage.setItem('email', admins[i].email);
                    localStorage.setItem('password', admins[i].password);
                    document.getElementById('signIn').action = "/NhomA03/SanPham/html/admin/admin.html";
                    this.submit();

                }

            }
    }
    Object.values(accountuser).map(item => {
            if (email === item.email) {
                if (password === item.password) {
                    localStorage.setItem('issignin', 1);
                    localStorage.setItem('email', item.email);
                    localStorage.setItem('password', item.password);
                    document.getElementById('signIn').action = "/NhomA03/Index.html";
                    this.submit();
                }

            }
            errorMessage.innerText = "Sai Mật Khẩu";

        }

    )
    return false;
}

function afterSignIn() {
    var signin = localStorage.getItem('issignin');
    let headeruser = document.querySelector(".icon-user");
    let email = localStorage.getItem('email');
    if (signin == 1) {
        headeruser.innerHTML = ' ';
        headeruser.innerHTML += `
        <li class="nav-item dropdown">
                <a class="fas fa-user nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"></a>
                <ul class="dropdown-menu">
                    <a href="/SanPham/html/cart.html" class="dropdown-item">
                        <li>Giỏ Hàng</li>
                    </a>
                    <a href="/SanPham/html/user_order.html" class="dropdown-item">
                    <li>Đơn Hàng</li>
                </a>
                    <a onclick="logout()" class="dropdown-item ">
                        <li>logout</li>
                    </a>
                </ul>
            </li>
`;

    }
}
afterSignIn();

function logout() {
    var signin = localStorage.getItem('issignin');
    if (signin) {
        localStorage.removeItem("issignin");
        location.reload();
    }
}

function showUserInfor() {
    let signin = localStorage.getItem('issignin');
    let email = localStorage.getItem('email');
    var accountuser = localStorage.getItem('accountusers');
    accountuser = JSON.parse(accountuser);
    let headeruser = document.querySelector(".user-infor");
    if (signin) {
        Object.values(accountuser).map(item => {
            if (email === item.email) {
                headeruser.innerHTML = ' ';

                headeruser.innerHTML += `
        <div class=" ">
            <label for="ten ">Họ tên</label>
            <input type="text " class="form-control " name="ten " id="ten " value="${item.name} " readonly=" ">
        </div>
        <div class=" ">
            <label for="email ">Email</label>
            <input type="text " class="form-control " name="email " id="email " value="${item.email} " readonly=" ">
        </div>
        <div class=" ">
            <label for="SĐT ">SĐT</label>
            <input type="text " class="form-control " name="SĐT " id="SĐT " value="${item.sdt} " readonly=" ">
        </div>
        <div class=" ">
            <label for="diachi ">Địa Chỉ Giao Hàng</label>
            <input type="text " class="form-control " name="diachi " id="diachi " value="${item.diachi} " >
        </div>
`;
            }
        })
    }
}
showUserInfor();