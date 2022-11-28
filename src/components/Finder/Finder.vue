<template>
    <section id="everything" class="w-full max-w-2xl mt-3 flex flex-col items-center gap-3">
      <div class="input-finder w-80 h-10 p-2 border border-black border-solid flex gap-2">
          <input type="text" name="" id="" placeholder="Buscar" class="flex-auto">
          <button class="flex-none" id="start-search">
              <img class="h-3/4" src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" alt="Ícono de lupa">
          </button>
      </div>

      <!-- El height debe ser cambiado por un valor relativo cuando empiece a cargar noticias -->
      <div class="results w-full h-96 border border-black border-solid">

      </div>
    </section>
</template>