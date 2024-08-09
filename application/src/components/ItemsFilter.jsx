import { useRef, useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function ItemsFilter({ statuses, companies, onFilterChange }) {
    const [cs, setCS] = useState("");
    const [status, setStatus] = useState("");
    const [company, setCompany] = useState("");

    const statusRef = useRef();
    const csRef = useRef();
    const companyRef = useRef();

    function handleCSSearch(e) {
        const CSText = e.target.value;
        setCS(CSText);
        applyFilter();
    }

    function handleStatusChange(e) {
        const statusText = e.target.value;
        setStatus(statusText);
        applyFilter();
    }

    function handleCompanyChange(e) {
        const companyText = e.target.value;
        setCompany(companyText);
        applyFilter();
    }

    
    function applyFilter() {
        onFilterChange(csRef.current.value, statusRef.current.value, companyRef.current.value);
    }

    function resetFilterControls() {
        setCS("");
        setStatus("");
        setCompany("");
        statusRef.current.value = "";
        csRef.current.value = "";
        companyRef.current.value = "";
    }

    function removeFilters() {
        resetFilterControls();
        applyFilter();
    }

    let statusOptionsJsx = statuses.map(status => {
        return (
            <option value={status}>{status}</option>
        )
    })
    statusOptionsJsx.unshift(<option value="">All</option>)

    let companyOptionsJsx = companies.map(company => {
        return (
            <option value={company}>{company}</option>
        )
    })
    companyOptionsJsx.unshift(<option value="">All</option>)

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', margin: '10px 30px 10px 30px' }}>
                <InputGroup className="mb-3" style={{ flex: 1 }}>
                    <Form.Control 
                        type="text" 
                        ref={csRef} 
                        className="games-search-box" 
                        value={cs} 
                        onChange={(e) => { handleCSSearch(e)}} 
                        placeholder="Enter a CS"
                    />
                    <button onClick={() => { removeFilters(); }} style={{margin: '0px 0px 0px 5px'}}>Remove Filters</button>
                </InputGroup>
                {/* <button onClick={() => { removeFilters(); }}>Remove Filters</button> */}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h5>Filters:</h5>

                Status
                <select ref={statusRef}
                onChange={(e) => {handleStatusChange(e)}}>
                    {statusOptionsJsx}
                </select>

                Company
                <select ref={companyRef}
                onChange={(e) => {handleCompanyChange(e)}}>
                    {companyOptionsJsx}
                </select>

                Tech
                <select>Tech</select>

            </div>

        </>
    );
}
