export default function Sobre() {
  return (
    <>
      <section className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold font-roboto  mb-4">
            Sobre <span className="text-[#104B64]">nós</span>
          </h2>
          <p className="text-[20px] font-roboto text-gray-700 mr-8 mt-6 mb-8 max-w-[466px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel soluta ex nisi
            consequatur repellendus earum provident non obcaecati. Deserunt nam sint nulla cumque
            quasi nisi saepe eius consequuntur? Minima.
          </p>
        </div>
      </section>

      <div className="w-full">
        <img src="/Vector.png" alt="Imagem ilustrativa sobre nós"
          className="w-full h-[490px] object-cover"/>
      </div>

      <section
        className="mx-auto my-20 p-8"
        style={{ maxWidth: '1298px', maxHeight: '784px' }}>
        <div className="flex flex-col gap-16">

          <div className="flex items-start gap-8">
            <h3 className="missao-title"
              style={{
                fontFamily: '"Core Sans D 55 Bold", sans-serif',
                fontWeight: 400,
                fontSize: '48px',
                lineHeight: '40px',
                letterSpacing: '0%',
                minWidth: '380px',
              }}
            >Missão
            </h3>
            <p className="font-roboto text-[20px] leading-8"
              style={{ fontWeight: 400, letterSpacing: '0%' }}
            > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus
              interdum, sapien a efficitur blandit, lectus nunc gravida libero, nec convallis
              lacus arcu a nulla.
            </p>
          </div>


          <div className="flex items-start gap-8">
            <h3
              className="missao-title"
              style={{
                fontFamily: '"Core Sans D 55 Bold", sans-serif',
                fontWeight: 400,
                fontSize: '48px',
                lineHeight: '40px',
                letterSpacing: '0%',
                minWidth: '380px',
              }}
            > Visão
            </h3>
            <p className="font-roboto text-[20px] leading-8"
              style={{ fontWeight: 400, letterSpacing: '0%' }}
            >Proin finibus magna ut justo laoreet, vel facilisis sem cursus. Mauris pulvinar, neque
              at fermentum condimentum, nunc magna vehicula ex, ut dapibus odio lorem eu libero.
            </p>
          </div>


          <div className="flex items-start gap-8">
            <h3 className="missao-title"
              style={{
                fontFamily: '"Core Sans D 55 Bold", sans-serif',
                fontWeight: 400,
                fontSize: '48px',
                lineHeight: '40px',
                letterSpacing: '0%',
                minWidth: '380px',
              }}
            >Valores
            </h3>
            <p className="font-roboto text-[20px] leading-8"
              style={{ fontWeight: 400, letterSpacing: '0%' }}
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ab alias eos esse dignissimos magnam earum ipsa dolor molestiae culpa harum, quidem illo. Atque numquam consectetur inventore quas odio quia!
            </p>
          </div>

          <div className="flex items-start gap-8">
           
            <div style={{
                minWidth: '380px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <img src="/homem.png" alt="Foto do colaborador"
                className="w-[120px] h-[120px] object-cover rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Nome</span>
                <span className="text-gray-600">Cargo</span>
              </div>
            </div>

           
            <p className="font-roboto text-[30px] leading-8"
              style={{ fontWeight: 400, letterSpacing: '0%' }}
            > "Proin finibus magna ut justo laoreet, vel facilisis sem cursus. Mauris pulvinar, neque
              at fermentum condimentum, nunc magna vehicula ex, ut dapibus odio lorem eu libero."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
