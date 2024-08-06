import { useRef, useState } from "react";

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
            <div>
                <input type="text" ref={csRef}
                    className="games-search-box"
                    value={cs}
                    onChange={(e) => { handleTitleSearch(e) }}
                    placeholder="Enter a CS">
                </input>
                <button onClick={() => { removeFilters(); }}>Remove Filters</button>
            </div>

            <div>
                Filters:
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
            </div>

        </>
    );
}
