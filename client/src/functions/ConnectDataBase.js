const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://matheusrodgsaraujo13:EngenhariaDeSoftware2023!@cluster0.k6wassi.mongodb.net/MomentzDB';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function conectarAoMongoDB() {
  let client;

  try {
    client = await MongoClient.connect(url, options);
    console.log('Conexão com o MongoDB estabelecida!');
    
    // Realize operações no banco de dados...
    
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('Conexão com o MongoDB fechada!');
    }
  }
}

// Chamando a função para conectar
conectarAoMongoDB();

