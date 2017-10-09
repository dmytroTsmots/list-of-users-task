function addEmployee() {

    firstName = document.querySelector("input[name='first-name']").value;
    lastName = document.querySelector("input[name='last-name']").value;
    salary = document.querySelector("input[name='salary']").value;
    position = document.querySelector("input[name='position']").value;

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
    var salaryValue = document.createTextNode("$ " + salary);
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
}

function removeEmployee() {
    var delEmp = document.querySelectorAll('.employeeDelete');
    for (i = 0; i < delEmp.length; i++) {
        delEmp[i].onclick = function() {
            var parent = this.parentNode.remove();
            currentlyEmployed();
        }
    }
}
removeEmployee();


function currentlyEmployed() {
    var list = document.getElementsByClassName('employeeFirstName');
    document.querySelector("#currentlyEmp").innerHTML = list.length;
}
currentlyEmployed();