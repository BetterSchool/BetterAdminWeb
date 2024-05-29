import concertpic from '../assets/concert.jpg';

export default function Home() {
  return (
    <>
      <div className="p-8">
      <div className="relative text-center text-white mb-8">
        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Music hero" className="w-full h-auto" />
        <h2 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 text-2xl">
          Velkommen til Kerteminde Musik Skole
        </h2>
      </div>
      <div className="space-y-12 text-center">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Om Os</h3>
          <p className="max-w-xl mx-auto">
            Kerteminde Musik Skole tilbyder undervisning i en række forskellige musikinstrumenter og sang. Vi har erfarne instruktører, der er dedikeret til at hjælpe eleverne med at udvikle deres musikalske færdigheder og lidenskab.
          </p>
          <img src="https://images.unsplash.com/photo-1556379118-7034d926d258?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Music instruments" className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto h-auto" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Nyheder</h3>
          <p>
            Hold dig opdateret med de seneste nyheder og begivenheder på Kerteminde Musik Skole. Vi arrangerer koncerter, workshops og meget mere for at fremme musik i vores samfund.
          </p>
          <img src={(concertpic)} alt="Concert" className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto h-auto" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Kontakt</h3>
          <p>
            Hvis du har spørgsmål eller ønsker at tilmelde dig vores musikprogrammer, er du velkommen til at kontakte os. Vi er her for at hjælpe dig med at finde det rette kursus for dig.
          </p>
          <img src="https://source.unsplash.com/400x300/?contact" alt="Contact" className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto h-auto" />
        </div>
      </div>
    </div>
    </>
  );
}
