function validate(el) {
    var pattern;
    switch (el.name) {
        case 'userName': pattern = /\S/; break;
        case 'email': pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i; break;
        case 'zip': pattern = /\b\d{5}\b/; break;
    }
    var res = pattern.test(el.value);
    if (!res) {
        el.className = "invalid";
        return false;
    }
    else {
        el.className = "valid";
        return true;
    }
}
function submitHandler(e) {
    var textElements = form1.querySelectorAll('input[type="text"][onchange="validate(this)"]');
    var valid = true;
    for (var el of textElements) {
        if (!validate(el)) {
            valid = false;
        }
    }
    if (!valid) {
        alert("Допущены ошибки при заполнении формы.");
        e.preventDefault();
    }
}