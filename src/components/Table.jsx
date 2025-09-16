
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
 * @param {any} [props.props] props HTML della tabella
 *
**/

const Table = ({ data = [], className = '', ...props }) => {
    // Se non ci sono dati, non visualizza nulla
    if (!data || data.length === 0) {
        return <p>Nessun dato da visualizzare.</p>;
    }

    // Estrazione delle chiavi dal primo oggetto, per usarle come header
    const headers = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto">
            <table className={`bg-white border border-gray-200 ${className}`} {...props}>
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th
                                key={i}
                                className="px-6 py-3 border-b-2  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase "
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowI) => (
                        <tr key={rowI} className="border-b border-gray-200 hover:bg-gray-50">
                            {headers.map((header, colI) => (
                                <td key={colI} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;