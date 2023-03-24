
const prisma = require('../database')

module.exports = {
    async create (req, res){
        try {
            const {name, cpf, livro} = req.body;

            console.log(name, cpf, livro);
        if(!name) return res.status(400).json("Preecha todos os dados!");
        if(!cpf) return res.status(400).json("Preecha todos os dados!");
        if(!livro) return res.status(400).json("Preecha todos os dados! livro");

        
        const reserva = await prisma.reservas.create(
            {data: {name, cpf, livro}
        });
        return res.status(201).json('Livro reservado!')
      

        } catch (error) {
            
        }
    }
 }