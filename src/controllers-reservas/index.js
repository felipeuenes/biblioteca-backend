
const prisma = require('../database')

module.exports = {
    async create (req, res){
        try {
            const {name, cpf, livro} = req.body;
        if(!name) return res.status(400).json("Preecha todos os dados!");
        if(!cpf) return res.status(400).json("Preecha todos os dados!");
        if(!livro) return res.status(400).json("Preecha todos os dados!");

        
        const reserva = await prisma..create(
            {data: {name, cpf, livro}
        });
        return res.status(201).json('Livro cadastrado')

        } catch (error) {
            
        }
    }
 }