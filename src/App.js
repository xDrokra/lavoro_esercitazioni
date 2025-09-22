import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Card from "./components/Card"
import Table from "./components/Table";
import { useState } from "react";




function App() {
  // Stato modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funzioni di apertura e chiusura modale
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  // Dati tabella di esempio
  const data = [
    {
      "tipo materiale": "flessibile",
      "prezzo": "30$"
    },
    {
      "tipo materiale": "rigido",
      "prezzo": "20$"
    }
  ]


  // Esempi di utilizzo
  return (
    <div className="m-5">

      {/* Esempio pulsante */}
      <div className="p-5 flex flex-col gap-4">
        <h1 className="text-3xl mb-3 font-bold">Esempio pulsante</h1>
        <Button variant="primary" icon={<img src="./google_icon.png" alt="icon-plus" />} iconPosition="left">
          Accedi con google
        </Button>
        <Button variant="secondary" icon={<img src="./google_icon.png" alt="icon-plus" />} iconPosition="right">
          Accedi con google
        </Button>
        <Button variant="primary">
          Cliccami
        </Button>
        <Button variant="secondary">
          Cliccami
        </Button>
        <Button variant="primary" size="full">
          Cliccami
        </Button>
        <Button variant="secondary" size="full">
          Cliccami
        </Button>
      </div>

      <hr></hr>

      {/* Esempio input */}
      <div className="p-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Esempio input</h1>
        <Input
          label="Email"
          type="email"
          placeholder="Email"
        />

        <Input
          placeholder="Cerca"
          icon={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>}
          className="max-w-full"
        />

        <Input
          label="Password"
          type="password"
          placeholder="password"
          value="leomalito@gmail.com"
          variant="error"
          errorMessage="Password errata"
        />

        <Input
          label="Email"
          type="email"
          placeholder="email"
          value="leomalito@gmail.com"
          variant="success"
        />
      </div>

      <hr></hr>

      {/* Esempio card */}
      <div className="p-5">
        <h1 className="text-3xl mb-3 font-bold">Esempio di Card</h1>
        <Card className="max-w-sm">
          <p>Questa e' una card</p>
        </Card>
      </div>

      <hr></hr>

      {/* Esempio Modale */}
      <div className="p-5">
        <h1 className="text-3xl mb-3 font-bold">Esempio di Modale</h1>
        <Button onClick={handleOpenModal}>Apri il Modale</Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">Modale</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          </p>
          <Button onClick={handleCloseModal} className="mt-5">Chiudi</Button>
        </Modal>
      </div>
      <hr></hr>

      {/* Esempio tabella */}
      <div className="p-5">
        <Table data={data} className={'max-w-lg'}>

        </Table>
      </div>

    </div>
  );
}

export default App;
