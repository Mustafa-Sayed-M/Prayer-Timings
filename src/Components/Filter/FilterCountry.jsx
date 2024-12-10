import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../../Utils/api';
import Select from 'react-select';

function FilterCountry({ setCountry, setCity }) {
    // Countries Query:
    const countriesQuery = useQuery({
        queryKey: ["countries"],
        queryFn: () => fetchCountries(),
        staleTime: 1000 * 60 * 5,
    });

    const handleChange = (selectedOption) => {
        setCountry(selectedOption.value);
        const selectedCountry = countriesQuery.data.find(country => country.cca2 === selectedOption.value);
        setCity(selectedCountry ? selectedCountry.capital[0] : '');
    };

    const countryOptions = (countriesQuery.data || []).map(country => ({
        value: country.cca2,
        label: country.translations.ara.common,
    }));

    return (
        <div className="filter-country space-y-2">
            <label>
                <span>الدولة</span>
                <Select
                    id="country"
                    name="country"
                    options={countryOptions}
                    onChange={handleChange}
                    className="w-full focus:outline cursor-pointer text-black mt-2"
                    classNamePrefix="react-select"
                    isSearchable
                    placeholder="اختر الدولة"
                />
            </label>
        </div>
    );
}

export default FilterCountry;