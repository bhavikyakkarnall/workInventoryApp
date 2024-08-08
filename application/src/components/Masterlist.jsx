import { useState, useEffect } from 'react';
import ItemsService from '../services/items-service.js';
import ItemsFilter from './ItemsFilter.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const itemsService = new ItemsService('http://localhost:3000/items');

export default function Masterlist() {

    const [allItems, setAllItems] = useState([]);
    const [items, setItems] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        itemsService.getItem()
            .then(itemsJsonData => {
                setItems(itemsJsonData);
                setAllItems(itemsJsonData);
                setCompanies(getUniqueCompanyList(itemsJsonData));
                setStatuses(getUniqueStatusList(itemsJsonData));
            })
            .catch(error => {
                setErrorMessage("SERVER DOWN! Unable to connect to server. Please try again later.")
            });
    }, []);

    const getUniqueStatusList = (items) => {
        const allStatusList = items.map(item => item.status);
        return [...new Set(allStatusList)];
    }

    const getUniqueCompanyList = (items) => {
        const allCompanyList = items.map(item => item.company);
        return [...new Set(allCompanyList)];
    }

    const applyFilter = (cs, status, company) => {
        let filteredItems = allItems.filter(item => {
            const csString = item.cs ? item.cs.toString() : '';
            return csString.includes(cs) &&
                   item.status.toLowerCase().includes(status.toLowerCase()) &&
                   item.company.toLowerCase().includes(company.toLowerCase());
        });
        setItems(filteredItems);
    }

    const showAllItems = () => {
        setItems(allItems);
    }

    // Display Items
    let itemsListJsx = items.map(item => {
        return (
            <>
                {/* <div key={item.id} className="game-card card grow mb-2 shadow-sm h-md-200 video-card">
                    <div className="card-body p-2">
                        <div className="row">
                            <div className="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
                                <h5 className="card-title text-truncate mt-n1 mb-1">CS: {item.cs}</h5>
                                <h6 className="card-title text-truncate mt-n1 mb-1">Type: {item.equipment_type}</h6>
                                <span className="badge badge-secondary text-dark mr-1">Company: {item.company}</span>
                                <span className="badge badge-secondary text-dark mr-1">Tech: {item.tech}</span>
                            </div>
                            <div className="col-1 align-self-center text-center text-muted justify-content-center d-none d-sm-block">
                                <h6></h6>
                            </div>
                            <div className="col-1 justify-content-center text-center align-self-center">
                                <span className="badge badge-ftg py-1 px-1 mb-1">FREE</span>
                            </div>
                        </div>
                    </div>
                </div> */}

            <div key={item.id}>
                <Card style={{width: '75%', margin: '30px'}} >
                    <Card.Body>
                        <Card.Title><h5>CS: {item.cs}</h5></Card.Title>
                        <Card.Text>
                            <div>
                                <Stack direction='horizontal' gap={3}>
                                    <div className='p-2'>Serial#{item.serial}</div>
                                    <div className='p-2'>Company: {item.company}</div>
                                    <div className='p-2'>Tech: {item.tech}</div>
                                </Stack>
                            </div>

                            <div>
                                <Stack direction='horizontal' gap={3}>
                                    <div className='p-2'>Phone#{item.phone}</div>
                                    <div className='p-2'>SIM#{item.sim}</div>
                                    <div className='p-2'>PO#{item.po}</div>
                                </Stack>
                            </div>
                            <div>
                                <Stack direction='horizontal' gap={2}>
                                    <div className='p-2'>Config:{item.config}</div>
                                    <div className='p-2'>Firmware:{item.firmware}</div>
                                    <div className='p-2'></div>
                                </Stack>
                            </div>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            </>
            

        )
    });

    return (
       <>
            <ItemsFilter companies={companies} statuses={statuses} onFilterChange={applyFilter}></ItemsFilter>
           {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
           <div>
                {itemsListJsx}
           </div>
       </>
    );
}
