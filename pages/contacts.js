import React, { useState, useEffect, useMemo } from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { FiChevronDown } from 'react-icons/fi';
import { formatDistanceToNow, parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';


// Define las columnas de la tabla
const columns = [
  {
      accessorKey: 'id',
      header: 'ID',
      cell: info => (
          <span className="text-gray-600 font-medium">{info.getValue()}</span>
      ),
  },
  {
      accessorKey: 'photo',
      header: 'Photo',
      cell: info => {
          const data = info.row.original;
          return (
              <div className="flex items-center justify-center">
                  <img
                      src={data.photo}
                      alt={`${data.name} ${data.last_name}`}
                      className="w-12 h-12 rounded-full border-2 border-gray-300"
                  />
              </div>
          );
      },
  },
  {
      accessorKey: 'name',
      header: 'Name',
      cell: info => {
          const data = info.row.original;
          return (
              <div className="flex flex-col">
                  <span className="text-gray-900 font-semibold">{data.name} {data.last_name}</span>
              </div>
          );
      },
  },
  {
      accessorKey: 'email',
      header: 'Email',
      cell: info => (
          <a
              href={`mailto:${info.getValue()}`}
              className="text-blue-500 hover:underline"
          >
              {info.getValue()}
          </a>
      ),
  },
  {
      accessorKey: 'phone',
      header: 'Phone',
      cell: info => (
          <div className="text-gray-700">
              {info.getValue()}
          </div>
      ),
  },
  {
      accessorKey: 'address',
      header: 'Address',
      cell: info => (
          <div className="text-gray-600 max-w-xs truncate">
              {info.getValue()}
          </div>
      ),
  },
  {
      accessorKey: 'updated_at',
      header: 'Last Updated',
      cell: info => {
          const updatedDate = info.row.original.updated_at;
          const formattedDate = format(parseISO(updatedDate), "dd/MM/yyyy HH:mm:ss", { locale: es });
          return (
            <span title={`Actualizado el ${formattedDate}`}>
                {formattedDate}{" "}
                <span className="text-xs text-gray-500 italic">
                    (Hace {formatDistanceToNow(parseISO(updatedDate), { addSuffix: false, locale: es })})
                </span>
            </span>
          );
      },
  },
  {
    id: 'view',
    header: 'Ficha',
    cell: ({ row }) => {
      const { id } = row.original; // Accede al ID del contacte
      return (
        <button
          onClick={() => window.location.href = `/contacts/${id}`} // Redirige a la ficha del contacte
          className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition"
        >
          Ver Ficha
        </button>
      );
    },
  },
];

const ContactsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const resultsPerPage = 8;

    const [sortOption, setSortOption] = useState('updated_at.desc'); 

    const [filters, setFilters] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      updated_at_from: '',
  });

    const fetchData = async () => {
        const token = localStorage.getItem('token');

        const [sortField, sortOrder] = sortOption.split('.');
        const apiUrl = new URL(`${process.env.API}/contacts/search`);
        apiUrl.searchParams.append('page', currentPage);
        apiUrl.searchParams.append('limit', resultsPerPage);
        apiUrl.searchParams.append('sortField', sortField);
        apiUrl.searchParams.append('sortOrder', sortOrder);

        Object.entries(filters).forEach(([key, value]) => {
          if (value && (key === 'created_at' || key === 'updated_at_from' || key === 'updated_at' || value.length >= 3)) {
              apiUrl.searchParams.append(key, value);
          }
      });

        try {
            setLoading(true);
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (!response.ok || result.success === false) {
                throw new Error(result.message || 'An error occurred');
            } else {
                setData(result.data?.data || []); // Si `result.data.data` es undefined, usa un array vacío
                setTotalPages(result.data?.last_page || 1); // Actualizar el total de páginas
                setError(null); // Limpiar el mensaje de error si la respuesta es exitosa
            }

            setData(result.data.data);
            setTotalPages(result.data.last_page || 1);
            setError(null);
        } catch (error) {
            setError(error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    function debounce(func, delay) {
      let timeoutId;
      return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
              func(...args);
          }, delay);
      };
  }
  
    const timeWaiting = 2000;

    const debouncedFetchData = useMemo(() => debounce(fetchData, timeWaiting), [filters]);

    useEffect(() => {
      // Ejecuta `fetchData` solo cuando `filters` cambie y después de que el usuario deje de escribir durante 500 ms
      const delayDebounceFn = setTimeout(() => {
        fetchData();
      }, timeWaiting);
    
      return () => clearTimeout(delayDebounceFn);
    }, [filters]);
    
    useEffect(() => {
      fetchData();
    }, [currentPage, sortOption]);

    const table = useReactTable({
        data,
        columns,
        pageCount: totalPages,
        manualSorting: true,
        manualPagination: true,
        state: {
            pagination: {
                pageIndex: currentPage - 1,
                pageSize: resultsPerPage,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: (updater) => {
            const newPageIndex = typeof updater === 'function' ? updater({ pageIndex: currentPage - 1 }).pageIndex : updater.pageIndex;
            setCurrentPage(newPageIndex + 1);
        },
    });

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleSortOptionChange = (e) => {
      setSortOption(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
          e.preventDefault(); // Previene solo si se presiona Enter
          fetchData(); // Llama a fetchData cuando se presiona Enter
      }
    };

    const handleOnBlur = (e) => {
      fetchData();
    };

    if (loading) return (
      <Layout>
          <div className='space-y-4'>
              <h1 className='text-4xl font-semibold'>Contacts</h1>
              <div className='bg-white p-4 rounded-lg'>
                <h2>Loading...</h2>
              </div>
          </div>
      </Layout>
  );
  
    if (error) return (
            <Layout>
                <div className='bg-white p-4 rounded-lg'>
                  <h2>{error.message}</h2>
                </div>
            </Layout>
  );

  return (
    <Layout>
        <div className="space-y-4">
            <h1 className="text-4xl font-semibold">Contacts</h1>

          {/* Filtros de búsqueda y ordenación */}
          <div className="flex justify-between items-end mb-4">
              {/* Contenedor de filtros a la izquierda */}
              <div className="flex flex-wrap gap-4">
                  <div className="relative w-48">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <div className="relative">
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={filters.name}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Search by Name"
                      className="border border-gray-300 rounded-md p-2 w-48"
                  />
                  </div>
                </div>
                  <div className="relative w-48">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <div className="relative">
                  <input
                      type="text"
                      id="email"
                      name="email"
                      value={filters.email}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Search by Email"
                      className="border border-gray-300 rounded-md p-2 w-48"
                  />
                  </div>
                </div>
                  <div className="relative w-48">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <div className="relative">
                  <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={filters.phone}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Search by Phone"
                      className="border border-gray-300 rounded-md p-2 w-48"
                  />
                  </div>
                </div>
                  <div className="relative w-72">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <div className="relative">
                  <input
                      type="text"
                      id="address"
                      name="address"
                      value={filters.address}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Search by Address"
                      className="border border-gray-300 rounded-md p-2 w-72"
                  />
                  </div>
                </div>
                <div className="relative w-48">
                    <label htmlFor="updatedAt_from" className="block text-sm font-medium text-gray-700 mb-1">Updated At (From)</label>
                    <div className="relative">
                        <input
                            type="datetime-local"
                            id="updatedAt_from"
                            name="updated_at_from"
                            onBlur={handleOnBlur}
                            value={filters.updated_at_from}
                            className="border border-gray-300 rounded-md p-2 w-48"
                        />
                    </div>
                </div>
              </div>

              {/* Select estilizado para ordenación alineado a la derecha */}
              <div className="relative w-64">
                  <label htmlFor="sortOption" className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
                  <div className="relative">
                      <select
                          id="sortOption"
                          value={sortOption}
                          onChange={handleSortOptionChange}
                          className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                          <option value="id.asc">ID (Ascending)</option>
                          <option value="id.desc">ID (Descending)</option>
                          <option value="name.asc">Name (Ascending)</option>
                          <option value="name.desc">Name (Descending)</option>
                          <option value="email.asc">Email (Ascending)</option>
                          <option value="email.desc">Email (Descending)</option>
                          <option value="updated_at.asc">Last Updated (Ascending)</option>
                          <option value="updated_at.desc">Last Updated (Descending)</option>
                      </select>
                      {/* Icono en la parte derecha del select */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <FiChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                  </div>
              </div>
          </div>

            {/* Tabla */}
            <div className="bg-white p-4 rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="border-b border-gray-200 p-4 text-left">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="border-b border-gray-200 p-4">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Paginación */}
            <div className="flex justify-between items-center mt-4">
                <Button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</Button>
                <span>Page {currentPage} of {totalPages}</span>
                <Button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</Button>
            </div>
        </div>
    </Layout>
  );
};

export default ContactsTable;
