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
      <div className="p-5">
        <h1 className="text-3xl mb-3 font-bold">Esempio input</h1>
        <Input placeHolder="placeholder" className="block" />
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
