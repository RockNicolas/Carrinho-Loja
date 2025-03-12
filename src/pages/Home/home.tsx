import { BsCartPlus } from 'react-icons/bs'

export function Home(){
    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-aut">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>
                <div className="grid grid-cols-1 gap-6 md:gird-cols-2 lg:grid-cols-5">
                    <section className="w-full">
                        <img 
                            className='w-full rounded-lg max-h-70 mb-2'
                            src="https://www.google.com/imgres?q=pc&imgurl=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F509571%2FPC-Gamer-Completo-Intel-Core-I7-16GB-RAM-SSD-512GB-Windows-10-Kit-Gamer-Monitor-24-Polegadas_1700495289_gg.jpg&imgrefurl=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F509571%2Fpc-gamer-completo-intel-core-i7-16gb-ram-ssd-512gb-windows-10-kit-gamer-monitor-24-polegadas&docid=jnCXUMmmKP35eM&tbnid=P6SpZ_Wrz7Ot2M&vet=12ahUKEwiNv8fCo4WMAxX_F2IAHZWzEfwQM3oECGUQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiNv8fCo4WMAxX_F2IAHZWzEfwQM3oECGUQAA" 
                            alt="Logo do produto" 
                        />
                        <p className='font-medium mt-1 mb-2'>Airpod</p>

                        <div className='flex gap-3 items-center'>
                            <strong className='text-zinc-700/90'>
                                R$ 10000
                            </strong>
                        </div>
                        <button className='bg-zinc-900 p-1 rounded'>
                            <BsCartPlus size={20} color='#fff' />
                        </button>

                    </section>

                    <section className="w-full">
                        <img 
                            className='w-full rounded-lg max-h-70 mb-2'
                            src="https://www.google.com/imgres?q=pc&imgurl=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F509571%2FPC-Gamer-Completo-Intel-Core-I7-16GB-RAM-SSD-512GB-Windows-10-Kit-Gamer-Monitor-24-Polegadas_1700495289_gg.jpg&imgrefurl=https%3A%2F%2Fwww.kabum.com.br%2Fproduto%2F509571%2Fpc-gamer-completo-intel-core-i7-16gb-ram-ssd-512gb-windows-10-kit-gamer-monitor-24-polegadas&docid=jnCXUMmmKP35eM&tbnid=P6SpZ_Wrz7Ot2M&vet=12ahUKEwiNv8fCo4WMAxX_F2IAHZWzEfwQM3oECGUQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwiNv8fCo4WMAxX_F2IAHZWzEfwQM3oECGUQAA" 
                            alt="Logo do produto" 
                        />
                        <p className='font-medium mt-1 mb-2'>Airpod</p>

                        <div className='flex gap-3 items-center'>
                            <strong className='text-zinc-700/90'>
                                R$ 10000
                            </strong>
                        </div>
                        <button className='bg-zinc-900 p-1 rounded'>
                            <BsCartPlus size={20} color='#fff' />
                        </button>

                    </section>
                </div>
            </main>
        </div>
    )
}