
const prisma = require('../database')

module.exports = {
    async create (req, res){
        try {
            const {name, cpf, livro} = req.body;

            if(!name) return res.status(400).json("Preecha todos os dados!");
            if(!cpf) return res.status(400).json("Preecha todos os dados!");
            if(!livro) return res.status(400).json("Preecha todos os dados! livro");
            
            
        
        const reserva = await prisma.reservas.create(
            {data: {name, cpf, livro}

        });
       
        return res.status(201).json('Livro reservado!')
      

        } catch (error) {
            console.error(error);
        }
        
    },

    async read(req, res){
        try {
            const listReserva = await prisma.reservas.findMany();
                    return res.json(listReserva);
        } catch (error) {
            
        }
    },

    async delete (req, res) {

        try {
            const { cpf } = req.params;
            
            const book = await prisma.reservas.findUnique({where: {cpf}});
            if(!book) return res.status(400).json('User not found');

            console.log(book);
 
            const bookDelete = await prisma.reservas.delete({
                where: {cpf}
            });
            console.log(bookDelete);
            return res.status(200).json('reserva deletada!');

          

        } catch (error) {
            console.error(error);
        }
    }
 }