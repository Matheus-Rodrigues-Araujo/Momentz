
const { logUserDetails } = require('./addUserFromRegister');

// Chame a função com os dados desejados
const username = "matheus";
const birth = "2002-01-01";
const email = "m@example.com";
const password = "8518918116185";

// Utilize a função logUserDetails importada
logUserDetails(username, birth, email, password);
