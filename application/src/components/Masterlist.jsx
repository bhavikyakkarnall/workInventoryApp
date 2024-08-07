import { useState, useEffect } from 'react';
import ItemsService from '../services/items-service.js';
import ItemsFilter from './ItemsFilter.jsx';

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
            <div key={item.id} className="game-card card grow mb-3 shadow h-md-250 video-card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
                            <h4 className="card-title text-truncate mt-n2 mb-1">CS: {item.cs}</h4>
                            <h6 className="card-title text-truncate mt-n2 mb-1">Type: {item.equipment_type}</h6>
                            <span className="badge badge-secondary text-dark mr-2">Company: {item.company}</span>
                            <span className="badge badge-secondary text-dark mr-2">Tech: {item.tech}</span>
                        </div>
                        <div className="col-1 align-self-center text-center text-muted justify-content-center d-none d-sm-block">
                            <h5></h5>
                        </div>
                        <div className="col-1 justify-content-center text-center align-self-center">
                            <span className="badge badge-ftg py-2 px-2 mb-2">FREE</span>
                        </div>
                    </div>
                </div>
            </div>
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
