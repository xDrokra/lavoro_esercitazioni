import Order from '../mocks/Order'
import { useState } from 'react'
import Table from './Table'
import Button from './Button'


/**
 * Tabella degli ordini
 * @component
 * 
 * @param {Object} props proprieta' componente
 * @param {string} props.title titolo della tabella
 */

const OrderTable = ({ title }) => {
  const [data, setData] = useState(Order)
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = () => {
    const sorted = [...data].sort((a, b) => {
      const dateA = new Date(a.data);
      const dateB = new Date(b.data);
      return sortAsc ? dateA - dateB : dateB - dateA;
    });
    setData(sorted);
    setSortAsc(!sortAsc);
  };

  // Definizione delle colonne 
  const cols = [
    { key: 'Documento', label: 'Documento' },
    { key: 'vs. riferimento', label: 'vs. riferimento' },
    {
      key: 'data', label: <span className="cursor-pointer" onClick={handleSort}>
        Data {sortAsc ? "▲" : "▼"}
      </span>
    },
    { key: 'stato', label: 'Stato' }
  ]

  // Formattazione delle date e stato con button
  const formattedData = data.map(item => ({
    ...item,
    data: new Date(item.data).toLocaleDateString('it-IT'),
    stato: <Button variant="secondary" className="px-2 py-1 text-xs">{item.stato}</Button>
  }));


  return (

    <div> 
      <div className="flex items-center gap-4 mt-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <span className="border-2 border-green-400 text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center">
          {data.length}
        </span>
      </div>
      <Table
        data={formattedData}
        cols={cols}
        className="min-w-[600px]"
      >
      </Table>

    </div>
  )
}

export default OrderTable