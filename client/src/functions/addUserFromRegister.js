const { MongoClient } = require('mongodb');

// Defina a URI de conexão
const uri = "mongodb+srv://matheusrodgsaraujo13:EngenhariaDeSoftware2023!@cluster0.k6wassi.mongodb.net/MomentzDB";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Função assíncrona para inserir os dados no banco de dados
async function logUserDetails(username, birth, email, password) {
  try {
    // Conecte-se ao banco de dados
    await client.connect();
    console.log("Connected to MongoDB");

    // Acesse o banco de dados e a coleção
    const database = client.db("MomentzDB");
    const collection = database.collection("users");

    // Dados a serem inseridos na coleção "users"
    const userData = {
      username: username,
      birth: birth,
      email: email,
      password: password
    };

    // Insira os dados na coleção "users"
    const result = await collection.insertOne(userData);
    console.log(`${result.insertedCount} `);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Feche a conexão com o banco de dados
    await client.close();
  }
}

// Exporte a função logUserDetails para uso em outros arquivos
module.exports = { logUserDetails };
