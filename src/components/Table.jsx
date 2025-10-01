
/** 
 * Tabella generica che riceve come input un array di oggetti 
 * genera l'header in base alle chiavi del primo oggetto
 * e aggiunge le righe in base ai valori
 *
 * @component
 *
 * @param {Object} props proprita' componente
 * @param {Array<Object>} [props.data=[]] dati della tabella
 * @param {string} [props.className=""] classi aggiuntive per la personalizzazione
 * @param {string} [props.title=""] titolo della tabella
 * @param {Array<{key: string, label: string}>} [props.cols] colonne della tabella (se non specificato, usa le chiavi del primo oggetto)
 * @param {any} [props.props] props HTML della tabella
 *
**/

import Card from "./Card";

const Table = ({ data = [], title = '', cols, className = '', ...props }) => {
    // Se non ci sono dati, non visualizza nulla
    if (!data || data.length === 0) {
        return <p>Nessun dato da visualizzare.</p>;
    }

    // Estrazione delle chiavi dal primo oggetto, per usarle come header
    const headers = cols || Object.keys(data[0]).map(key => ({ key, label: key }));

    return (
        <Card className="bg-gray-50 md:w-fit w-full flex flex-col gap-4 p-6">
            {title && <h1 className="text-xl font-bold">{title}</h1>}
            <table className={`hidden md:table ${className}`} {...props}>
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th
                                key={i}
                                className="px-6 py-3 border-b-2 text-left text-xs font-semibold text-gray-400 uppercase "
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowI) => (
                        <tr key={rowI} className="hover:bg-gray-50 transition-colors duration-200">
                            {headers.map((header, colI) => (
                                <td key={colI} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item[header.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center mt-4">
                <a href="/table" className="text-purple-600 hover:underline font-semibold text-sm">
                    Visualizza tutti
                </a>
            </div>

            <div className="block md:hidden space-y-4 ">
                {data.map((item, i) => (
                    <div key={i} className="border rounded-lg p-4 bg-white shadow-sm">
                        {headers.map((header, j) => (
                            <div key={j} className="flex justify-between py-1">
                                <span className="font-semibold capitalize text-sm">{header.label}</span>
                                <span className="text-sm">{item[header.key]}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </Card>
    );
};

export default Table;