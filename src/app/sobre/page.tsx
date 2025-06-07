export default function Sobre() {
  return (
    <> 
      
      <section className="bg-white py-20 px-4">
        <div className="max-w-[1458px] mx-auto px-4 md:px-0">

          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
            Sobre <span className="text-[#104B64]">nós</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-6 mb-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel soluta ex nisi
            consequatur repellendus earum provident non obcaecati. Deserunt nam sint nulla cumque
            quasi nisi saepe eius consequuntur? Minima.
          </p>
        </div>
      </section>

      <div className="w-full">
        <img
          src="/Vector.png"
          alt="Imagem ilustrativa sobre nós"
          className="w-full h-64 md:h-[490px] object-cover"
        />
      </div>

      
      <section className="max-w-6xl mx-auto my-20 px-4">
        <div className="flex flex-col gap-16">

          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <h3 className="text-3xl md:text-4xl font-bold min-w-[160px] md:min-w-[300px]">
              Missão
            </h3>
            <p className="text-lg leading-8 text-gray-800 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus
              interdum, sapien a efficitur blandit, lectus nunc gravida libero, nec convallis
              lacus arcu a nulla.
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <h3 className="text-3xl md:text-4xl font-bold min-w-[160px] md:min-w-[300px] ">
              Visão
            </h3>
            <p className="text-lg leading-8 text-gray-800 font-roboto">
              Proin finibus magna ut justo laoreet, vel facilisis sem cursus. Mauris pulvinar, neque
              at fermentum condimentum, nunc magna vehicula ex, ut dapibus odio lorem eu libero.
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <h3 className="text-3xl md:text-4xl font-bold min-w-[160px] md:min-w-[300px] ">
              Valores
            </h3>
            <p className="text-lg leading-8 text-gray-800 font-roboto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ab alias eos esse
              dignissimos magnam earum ipsa dolor molestiae culpa harum, quidem illo. Atque numquam
              consectetur inventore quas odio quia!
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex items-center gap-4 min-w-[160px] md:min-w-[300px]">
              <img
                src="/homem.png"
                alt="Foto do colaborador"
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold">Nome</span>
                <span className="text-gray-600">Cargo</span>
              </div>
            </div>

            <p className="text-xl leading-8 text-gray-800 font-roboto">
              Proin finibus magna ut justo laoreet, vel facilisis sem cursus. Mauris pulvinar,
              neque at fermentum condimentum, nunc magna vehicula ex, ut dapibus odio lorem eu
              libero.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
