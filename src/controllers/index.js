const prisma = require('../database')

module.exports ={
  async create (req, res) {

    try {
        const {name, autor} = req.body;
        if(!name) return res.status(400).json("Name required");
        if(!autor) return res.status(400).json("Autor required");
     
        
        console.log(name, autor);
        // const userCreate = await prisma.livros.create({
        //   data: {name, autor}
        // })

        const userCreate = await prisma.livros.create({data: {name, autor}});
        return res.status(201).json('Livro cadastrado')

    } catch (error) {
    
        console.error(error);
    }
    },
    async read (req, res){
        try {
            const listBooks = await prisma.livros.findMany();
                    return res.json(listBooks);
        } catch (error) {
            console.error(error);
        }
    },

    async update(req, res){
        try {
            const { id } = req.params;
            console.log(id);

            const { name, autor } = req.body;
            if( !name ||
                !autor
               ){
                return  res.status(400).json('Por favor, preencha todos os dados')
            }


            await prisma.livros.update({
                data: {name, autor},
                where: {idlivros: Number(id)}
            });
            return res.status(200).json('Livro atualizado com sucesso');
            

        } catch (error) {
            console.error(error);
        }
    },



    async delete (req, res) {

        try {
            const { id } = req.params;

            const book = await prisma.livros.findUnique({where: {idlivros: Number(id)}});
            if(!book) return res.status(400).json('User not found');

            const bookDelete = await prisma.livros.delete({
                where: {idlivros: Number(id)}
            });
            // return res.json(bookDelete);
            return res.status(200).json('Livro deletado!');

          

        } catch (error) {
            console.error(error);
        }
    }
}