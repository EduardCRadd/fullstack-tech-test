'use client'

export default function Character() {
  return (
    <main className="relative w-full h-full">
      <div className="w-full h-[60%] md:h-[40%] bg-tertiary p-14">
        <h1 className="text-5xl font-semibold text-center md:text-left">Rick and Morty</h1>

        <div className="pt-10 text-xl text-center md:text-left">
          <a href="/">&#x3c; Back to character listing</a>
        </div>

        <div className="flex flex-col items-center md:flex-row text-center md:text-left transform -translate-y-[-100px]">
          <div className="pr-0 md:pr-16 pb-10 md:pb-0">
            <img
              className="inline-block h-64 w-64 rounded-full"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt=""
            />
          </div>
          <div className="text-xl font-medium">
            <h2 className="text-5xl font-semibold text-center md:text-left whitespace-nowrap pb-8">Rick Sanchez</h2>
            <p>Status: Alive</p>
            <p>Origin: (origin name)</p>
          </div>
        </div>
      </div>

      <div className="text-lg mt-6 md:mt-32 p-14">
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center md:text-left pb-4">Location Details:</h3>
          <p>Name:</p>
          <p>Type:</p>
          <p>Dimension:</p>
          <p>No. of Residents:</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center md:text-left pb-4">Episodes (ep. appearance count)</h3>
          <p>First appearance: (name & ep. of first appearance)</p>
          <p>First appearance air date: (ep. first appearance date)</p>
          <p>First appearance character count: (ep. first appearance char. count)</p>
          <br />
          <p>Last appearance: (name & ep. of last appearance)</p>
          <p>Last appearance air date: (ep. last appearance date)</p>
          <p>Last appearance character count: (ep. last appearance char. count)</p>
        </div>
      </div>
    </main>
  )
}
