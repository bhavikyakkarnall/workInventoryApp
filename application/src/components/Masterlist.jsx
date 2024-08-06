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

    useEffect(
        () => {
            itemsService.getItem()
                .then(itemsJsonData => {
                    setItems(itemsJsonData);
                    setAllItems(itemsJsonData);
                })
                .catch(error => {
                    setErrorMessage("SERVER DOWN! Unable to connect to server. Please try again later.")
                });
        }, 
        []
    );

    const getUniqueStatusList = function(items) {
        const allStatusList = items.map(item => item.status);
        const uniqueStatusList = [...new Set(allStatusList)];
        return uniqueStatusList;
    }

    const getUniqueCompanyList = function(items) {
        const allCompanyList = items.map(item => item.company);
        const uniqueCompanyList = [...new Set(allCompanyList)];
        return uniqueCompanyList;
    }

    const applyFilter = function(cs, status, company) {
        let filteredItems = allItems.filter(item => 
            item.cs.includes(cs) &&
            item.status.includes(status) &&
            item.company.includes(company)
        );
        setItems(filteredItems);
    }

    const showAllItems = function() {
        setItems(allItems);
    }

    // Display Items
    let itemsListJsx = items.map(item => {
        return (
            <div key={item.id} className="game-card card grow mb-3 shadow h-md-250 video-card">
                <div className="card-body">
                    <div className="row">
                        {/* <div className="col-3 align-self-center mt-n2">
                            <div className="card">
                                <div className="image-wrapper">
                                    <img className="card-img-top" src={item.thumbnail} alt={item.cs} />
                                </div>
                            </div>
                        </div> */}
                        <div className="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
                            CS: <h4 className="card-title text-truncate mt-n2 mb-1">{item.cs}</h4>
                            <div className="text-truncate text-muted mb-1">{item.equipment_type}</div>
                            <span className="badge badge-secondary text-dark mr-2">{item.company}</span>
                            <span className="badge badge-secondary text-dark mr-2">{item.tech}</span>
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
            <ItemsFilter companies={companies} statuses = {statuses} onFilterChange={applyFilter}></ItemsFilter>
           {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
           <div>
                {itemsListJsx}
           </div>
       </>
    );
}
