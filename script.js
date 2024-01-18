function showRegistrationForm() {
    hideAllForms();
    document.getElementById('registrationForm').style.display = 'block';
}

function showLogin() {
    hideAllForms();
    document.getElementById('loginForm').style.display = 'block';
}

function showUserList() {
    hideAllForms();
    document.getElementById('userList').style.display = 'block';
    displayUserList();
}

function hideAllForms() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userList').style.display = 'none';
}

function registerUser() {
    // Validace formuláře
    // Implementace zde...

    // Uložení do local storage
    const user = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        status: document.getElementById('status').checked ? 'aktivní' : 'neaktivní'
    };

    let userList = JSON.parse(localStorage.getItem('userList')) || [];
    userList.push(user);
    localStorage.setItem('userList', JSON.stringify(userList));

    alert('Uživatel byl úspěšně zaregistrován!');
}

function login() {
    // Validace formuláře
    // Implementace zde...

    const enteredUsername = document.getElementById('loginUsername').value;
    const enteredPassword = document.getElementById('loginPassword').value;

    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    const user = userList.find(u => u.username === enteredUsername);

    if (!user) {
        alert('Uživatel s tímto jménem neexistuje.');
    } else if (user.password !== enteredPassword) {
        alert('Nesprávné heslo.');
    } else {
        alert('Přihlášení úspěšné!');
    }
}

function displayUserList() {
    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    const userListContent = document.getElementById('userListContent');

    userListContent.innerHTML = '';

    userList.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `<strong>${user.username}</strong> - ${user.name} ${user.surname} (${user.status})`;
        userListContent.appendChild(userDiv);
    });
}