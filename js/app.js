var addEmployee = document.querySelector('.addEmployee');
var curEmp = document.getElementsByClassName('employeeFirstName');
var averSalOut = document.querySelector('#averageSalary');


addEmployee.addEventListener('click', function() {

    var maxEmployee = document.querySelector("input[name='maxEmployee']").value,
        firstName = document.querySelector("input[name='first-name']").value,
        lastName = document.querySelector("input[name='last-name']").value,
        salary = document.querySelector("input[name='salary']").value,
        position = document.querySelector("input[name='position']").value;


    if (curEmp.length >= maxEmployee) {
        alert('You cann`t hired more then ' + maxEmployee + ' employees');
        return false;
    }
    if (averSalOut.textContent >= 2000) {
        alert('Limit set to $2000, you cann`t hired more');
        return false;
    }
    if (firstName == '' || lastName == '' || position == '') {
        alert('You should fill all empty fields');
        return false;
    }
    if (isNaN(parseInt(salary))) {
        alert('You should enter salary as a number');
        return false;
    } else if (salary <= 0) {
        alert('You should enter positive value of a salary');
        return false;
    }
    if (checkDuplicates(firstName, lastName)) {
        alert(firstName + ' ' + lastName + ' is already exist, change name');
        return false;
    }

    var newEmployee = document.createElement('li');
    newEmployee.setAttribute('class', 'list');

    var newFirstName = document.createElement('span');
    var firstNameValue = document.createTextNode(firstName);
    newFirstName.setAttribute('class', 'employeeFirstName');
    newFirstName.appendChild(firstNameValue);

    var newLastName = document.createElement('span');
    var lastNameValue = document.createTextNode(lastName);
    newLastName.setAttribute('class', 'employeeLastName');
    newLastName.appendChild(lastNameValue);

    var newSalary = document.createElement('span');
    var salaryValue = document.createTextNode(salary);
    newSalary.setAttribute('class', 'employeeSalary');
    newSalary.appendChild(salaryValue);

    var newPosition = document.createElement('span');
    var positionValue = document.createTextNode(position);
    newPosition.setAttribute('class', 'employeePosition');
    newPosition.appendChild(positionValue);

    var newDelete = document.createElement('span');
    newDelete.setAttribute('class', 'employeeDelete');
    var icon = document.createElement('i');
    icon.classList.add('fa', 'fa-window-close');
    icon.setAttribute('aria-hidden', 'true')
    newDelete.appendChild(icon);
    icon.onclick = removeEmployee;

    newEmployee.appendChild(newFirstName);
    newEmployee.appendChild(newLastName);
    newEmployee.appendChild(newSalary);
    newEmployee.appendChild(newPosition);
    newEmployee.appendChild(newDelete);

    document.querySelector(".employeeList").appendChild(newEmployee);
    currentlyEmployed();
    averageSalary();

});

function removeEmployee() {
    var delEmp = document.querySelectorAll('.employeeDelete');
    for (i = 0; i < delEmp.length; i++) {
        delEmp[i].onclick = function() {
            var parent = this.parentNode.remove();
            currentlyEmployed();
            averageSalary();
        }
    }
}
removeEmployee();



function currentlyEmployed() {
    document.querySelector('#currentlyEmp').innerHTML = curEmp.length;
}
currentlyEmployed();



function averageSalary() {
    var employeeSalary = document.querySelectorAll('.employeeSalary');
    var averSal = 0;
    if (employeeSalary.length != 0) {
        for (var i = 0; i < employeeSalary.length; i++) {
            averSal += parseInt(employeeSalary[i].innerHTML);
            averSalOut.innerHTML = (averSal / employeeSalary.length).toFixed(2)
        }
    } else {
        averSalOut.innerHTML = 0;
    }
}
averageSalary();


function checkDuplicates(fname, lname) {
    var first = document.getElementsByClassName('employeeFirstName');
    var last = document.getElementsByClassName('employeeLastName');
    for (var i = 0; i < first.length; i++) {
        if (((first[i].textContent).toLowerCase() == fname.toLowerCase()) && ((last[i].textContent).toLowerCase() == lname.toLowerCase())) {
            return true
        }
    }
    return false
}